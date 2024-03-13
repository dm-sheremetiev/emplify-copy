declare global {
  interface Window {
    MktoForms2: any;
    // ChiliPiper: any;
  }
}

export const loadMarketoForm = (): any => {
  // commented out chilipiper on request of LT
  // return ({ rootUrl, formId, munchkinId, onReady, chiliPiper }) => {
  return ({ rootUrl, formId, munchkinId, onReady }) => {
    // 4.
    const _onReady = (form: any) => {
      // Define new form values
      if (onReady?.formValues) form.vals(onReady?.formValues);

      // Remove some certain predefined fields from HTML form.
      if (!onReady?.fieldsToHide) return;

      // Make an array from fieldsToHide to support old and new fields
      const fieldsToHide = Array.isArray(onReady.fieldsToHide) ? onReady.fieldsToHide : [onReady.fieldsToHide];

      try {
        fieldsToHide.forEach((item: string) => {
          const mktoRowElem = document.getElementById(item).parentElement.parentElement.parentElement;
          if (mktoRowElem.classList.contains('mktoFormRow')) mktoRowElem.style.display = 'none';
        });
      } catch (error) {
        console.warn('There is an error when attempting to remove certain fields from the HTML form.', fieldsToHide, error);
      }

      // Replace the mentioned predefined fields with new ones.
      try {
        if (!onReady.replaceWith) return;

        const newFieldsValues = {};
        const currentValues = form.getValues();

        fieldsToHide
          .filter((field: string) => currentValues && currentValues[field] === onReady.replaceWith)
          .forEach((field: string) => {
            newFieldsValues[field] = onReady.replaceWith;
          });

        // Set new values
        form.setValues(newFieldsValues);
      } catch (error) {
        console.warn('There is an error when trying to replace the values of new fields.', fieldsToHide, error);
      }
    };

    // 3.
    const _loadForm = () => {
      if (!formId) return;

      // Checking the formId that is currently being loaded.
      if (window?.sessionStorage?.getItem('formId')) return;
      if (typeof window.MktoForms2 === 'undefined') {
        console.warn('The Marketo form is not being loaded for the specified formId.', formId);
        return;
      }

      // Store the formId to prevent the simultaneous loading of duplicate forms.
      window?.sessionStorage?.setItem('formId', formId);

      // Load the form and then watch for the form submission.
      window.MktoForms2.loadForm(rootUrl, munchkinId, formId, (form: any) => {
        window?.sessionStorage?.removeItem('formId');

        // After the form is submitted with a successful status, we will have this callback.
        form.onSuccess(() => {
          // commented out chilipiper on request of LT
          // try {
          //   if (chiliPiper?.enable) {
          //     // Submit the ChiliPiper
          //     // Within the "moreOptions," there is a possibility for also replacing the formId.
          //     window.ChiliPiper.submit('emplifi', 'inbound-router', { formId: `mktoForm_${formId}`, ...(chiliPiper?.moreOptions || {}) });

          //     // This line cancels the form redirection and waits for ChiliPiper's redirection.
          //     return false;
          //   }
          // } catch (error) {
          //   console.warn('Error in loading chiliPiper for formId:', formId, error);
          // }

          // It is important to keep this line to enable the form's designated redirection.
          return true;
        });
      });

      try {
        setTimeout(() => {
          // General callback without the need for a form to be submitted.
          if (onReady) window.MktoForms2.whenReady(_onReady);
        }, 200);
      } catch (error) {
        console.warn('Error in loading onReady for formId:', formId, error);
      }
    };

    // 2.
    const _loadFormScript = (src: string, onload: any, onerror: any) => {
      if (window.MktoForms2) return onload();

      // Remove previous attempt
      window?.sessionStorage?.removeItem('formId');

      // Create script tag and append it into the body tag
      const script = document.createElement('script');
      script.onload = onload;
      if (onerror) script.onerror = onerror;
      script.setAttribute('src', src);
      script.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('body')[0].appendChild(script);
    };

    // 1. Start to load the form and then call the _loadForm as callback
    _loadFormScript(`${rootUrl}/js/forms2/js/forms2.min.js`, _loadForm, () => {
      console.warn('Script is not loaded for formId:', formId);
    });
  };
};
