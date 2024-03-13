import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styles from '@/components/blocks/UiCxIndexBanner/cx-index-banner.module.scss';
import clsx from 'clsx';
import { FORM_ERROR } from 'final-form'
import { useRouter } from 'next/router';
import { industries } from '@/components/blocks/UiTrialFormBanner/data/definitions';

interface Props {
  children: React.ReactNode
}

const MultiStepForm = ({ children}: Props) => {
  const {basePath} = useRouter();
  const {asPath} = useRouter();
  const [success, setSuccess] = useState<boolean>()
  const [submitted, setSubmitted] = useState(false)
  const [stepNumber, setStepNumber] = useState(0)
  const isFormSuccess = submitted && success
  const isFormFailure = submitted && !success
  const steps = React.Children.toArray(children)
  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps -1

  const next = (values) => {
    setStepNumber(stepNumber + 1)
  }

  async function handleSubmit(values) {
    const {first_name, last_name, country, company, email, industry, facebook_page, tiktok_profile, twitter_profile, instagram_profile, youtube_channel, phone, number_of_employees, consentToProcessing = false} = values

    let industryName = ''
    industries.filter(item => {
      if(item.value === industry) {
        return industryName = item.name
      }
    })

    const formData = {
      'first_name': first_name,
      'last_name': last_name,
      'country': country,
      'company': company,
      'email': email,
      'industry': industry,
      'industry_name': industryName,
      'consent_to_processing': consentToProcessing,
      'phone': phone,
      'twitter_profile': twitter_profile,
      'facebook_page': facebook_page,
      'youtube_channel': youtube_channel,
      'instagram_profile': instagram_profile,
      'tiktok_profile': tiktok_profile,
      'number_of_employees': number_of_employees,
      'lead_source_type_current': 'inbound',
      'sign_up_lp': asPath,
      'current_campaign': process.env.CX_INDEX_CURRENT_CAMPAIGN,
      'organization_origin': 'emplifi'
    }

    if(isLastStep) {
      if(!values.facebook_page && !values.twitter_profile && !values.youtube_channel && !values.instagram_profile) {
        return {[FORM_ERROR]: "One of the fields username or email is required"}
      }
      await saveForm(formData)
    } else {
      next(values)
    }
  }

  async function saveForm(formData): Promise<void> {
    try {
      const {status} = await fetch(`${basePath}/api/register-cx-index`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (status === 200) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } catch (err) {
      setSuccess(false)
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <>
      {isFormFailure &&
        <div className={styles.resultBlock}>
          <img src="/images/icon-error.svg" alt="Error icon" />
          <h2 className={styles.stepHeading}>Oops!</h2>
          <p>Looks like something went wrong.</p>
          <p>Please refresh the page and try again.</p>
        </div>
      }
      {isFormSuccess &&
        <div className={styles.resultBlock}>
          <h2 className={styles.stepHeading}>Thank you for requesting your personalized Emplifi CX score!</h2>
          <p>We are parsing through the data and will get your score to you shortly.
            Please check you email for updates. Please allow up to 48 hours for your results to hit your inbox.
          </p>
          <img src="/images/icon-envelope.svg" alt="Envelope icon" />
          <div className={clsx(styles.resultBlock, styles.bottom)}>
            <h3>Check out the top global findings from the Emplifi CX Index</h3>
            <a className={clsx(styles.ctaButton, styles.light)} href="https://emplifi.io/resources/blog/key-findings-in-the-emplifi-cx-index">Read Now</a>
          </div>
        </div>
      }

      {!submitted &&
          <Form onSubmit={handleSubmit} render={({handleSubmit, submitting, submitError}) => {
            return (
              <form onSubmit={handleSubmit}>
                {step}
                {!isLastStep && (
                    <>
                      <div className={styles.privacyPolicy}>
                        <p>By submitting this form, I consent to Emplifi Group companies listed in its Privacy Policy
                          processing my information in accordance with its <a href="">Privacy Policy</a>.</p>
                      </div>
                      <div className={styles.checkboxStyles}>
                        <Field
                        name="consentToProcessing"
                        component="input"
                        type="checkbox"
                        id="consentToProcessing"
                        />
                        <label htmlFor="consentToProcessing">
                        I would like to receive marketing and promotional messages from Emplifi Group companies about its products
                        and services, promotions, news, and events. I understand that I may opt out of these messages at any time.
                        </label>
                      </div>
                    </>
                  )
                }
                {submitError && <div className={styles.errorMessage}>*Fill at least one social media account</div>}
                <div className={styles.btnWrapper}>
                  <button className={clsx(styles.ctaButton, submitting && styles.disabled)}
                          type="submit"
                          disabled={submitting}>{isLastStep ? 'Submit' : 'Next >'}
                  </button>
                </div>
              </form>
              )
            }}
          />
        }
    </>
  )
}

export default MultiStepForm

export const FormStep = ({children}) => children;
