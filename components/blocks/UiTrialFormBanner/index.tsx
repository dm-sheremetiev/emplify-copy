import clsx from 'clsx'
import { keccak512 } from 'js-sha3'
import Image from 'next/legacy/image'
import memoize from 'lodash.memoize'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Field, Form } from 'react-final-form'
// import { useLanguageDetector } from 'context/langDetector'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

// Interfaces
import { jsonModel } from '@/interfaces/blocks'

// Styles
import styles from './trial-form.module.scss'
import inputStyles from './components/input.module.scss'

import InputTooltip from './components/input-tooltip'
import CheckMarkIco from './assets/checkmark-ico.svg'
import WarningIco from './assets/warning-ico.svg'

import { sleep } from '../../../utils/helper-functions'
import { validateForm, validateFormField, validations } from '../../../utils/validation'
import { countries, jobFunction, jobLevel, industries, numberOfEmployees } from './data/definitions'

export function UiTrialFormBannerComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block
  // const router = useRouter()
  // const { langDetector } = useLanguageDetector()

  // Trial form
  const { basePath, asPath } = useRouter()
  const [success, setSuccess] = useState<boolean>()
  const [submitted, setSubmitted] = useState(false)
  const isFormSuccess = submitted && success
  const isFormFailure = submitted && !success
  const bulletPointsList = documentToHtmlString(data.bulletPointsList?.json)
  const privacyPolicy = documentToHtmlString(data.privacyPolicy?.json)
  const submitButton = data.submitButtonText
  const resultBlockSuccessText = documentToHtmlString(data.resultBlockSuccessText?.json)
  const EMAIL_API_CHECK_TYPE = 'emailApiCheck'
  const SLEEP_TIMER_FOR_DEBOUNCE = 400

  async function saveForm(formData): Promise<void> {
    try {
      const { status } = await fetch(`${basePath}/api/register-trial`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
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

  async function handleSubmit(values) {
    const { firstName, lastName, country, company, phone, email, industry, jobFunction, jobLevel, numberOfEmployees, password, consentToProcessing } =
      values
    const formData = {
      first_name: firstName,
      last_name: lastName,
      country: country,
      company: company,
      phone: phone,
      email: email,
      industry: industry,
      job_function_marketo_form: jobFunction,
      job_level_marketo_form: jobLevel,
      number_of_employees: numberOfEmployees,
      password: keccak512(password),
      consent_to_processing: consentToProcessing,
      sign_up_lp: asPath,
      lead_source_type_current: 'inbound',
      current_campaign: process.env.WWW_API_CURRENT_CAMPAIGN,
      current_lead_source_detail: 'Inbound - Free Trial',
      lead_source_current: 'trial'
    }

    await saveForm(formData)
  }
  const required = (value) => (value ? undefined : 'This field is required')

  // Check if there is not translated text // Alert message
  // langDetector([data?.heading], router.locale)

  // Email validation
  const emailValid = memoize(async (value: string) => {
    const requiredMsg = validations.required(value)?.message
    if (requiredMsg) return requiredMsg
    const emailValidFormatMsg = validations.email(value)?.message
    if (emailValidFormatMsg) return emailValidFormatMsg
    try {
      await sleep(SLEEP_TIMER_FOR_DEBOUNCE, EMAIL_API_CHECK_TYPE)
    } catch (e) {
      // do nothing
    }
    const emailApiCheckMsg = await validations.emailApiCheck(value)
    if (emailApiCheckMsg?.message) return emailApiCheckMsg.message
  })

  return (
    <div className={styles.trialFormBanner}>
      <div className={styles.inner}>
        <div className={clsx(styles.item, styles.hasHeading)}>
          <h1>{data.heading}</h1>
        </div>
        <div className={clsx(styles.item, styles.hasForm)}>
          <div className={styles.trialForm}>
            {isFormSuccess && (
              <div className={styles.resultBlockWrapper}>
                <h3>{data.resultBlockSuccessTitle}</h3>
                <Image src={CheckMarkIco.src} role="presentation" alt={''} layout="fixed" width="135" height="28" loading="eager" />
                <div dangerouslySetInnerHTML={{ __html: resultBlockSuccessText }} />
              </div>
            )}

            {isFormFailure && (
              <div>
                <div className={styles.resultBlockWrapper}>
                  <h3>{data.resultBlockFailTitle}</h3>
                  <Image src={WarningIco.src} role="presentation" alt={''} layout="fixed" width="135" height="28" loading="eager" />
                </div>
              </div>
            )}

            {!submitted && (
              <Form
                onSubmit={handleSubmit}
                validate={(values) => {
                  return validateForm({
                    password: [validations.required, validations.password, validations.passwordSameAsEmail(values.email)]
                  })(values)
                }}
                render={({ handleSubmit, submitting }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      {/* First Name */}
                      <Field name="firstName" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input {...input} className={inputStyles.input} type="text" placeholder={data.firstName} />
                            <label htmlFor="firstName">{data.firstName}</label>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Last Name */}
                      <Field name="lastName" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input {...input} className={inputStyles.input} type="text" placeholder={data.lastName} />
                            <label htmlFor="lastName">{data.lastName}</label>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Phone */}
                      <Field name="phone" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input {...input} className={inputStyles.input} type="tel" placeholder={data.phoneNumber} />
                            <label htmlFor="phone">{data.phoneNumber}</label>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Email */}
                      <Field name="email" maxLength={80} autoComplete="email" validate={emailValid}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input {...input} className={inputStyles.input} type="email" name="email" placeholder={data.email} />
                            <label htmlFor="email">{data.email}</label>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Company */}
                      <Field name="company" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input {...input} className={inputStyles.input} type="text" placeholder={data.company} />
                            <label htmlFor="company">{data.company}</label>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Location */}
                      <Field name="country" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <select id="country" {...input}>
                              <option value="">Select Location</option>
                              {countries.map((country) => {
                                return (
                                  <option key={country.name} value={country.iso}>
                                    {country.name}
                                  </option>
                                )
                              })}
                            </select>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Job Function */}
                      <Field name="jobFunction" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <select id="jobFunction" {...input}>
                              <option value="">Job Function</option>
                              {jobFunction.map((job, i) => {
                                return (
                                  <option key={i} value={job.value}>
                                    {job.name}
                                  </option>
                                )
                              })}
                            </select>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Job Level */}
                      <Field name="jobLevel" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <select id="jobLevel" {...input}>
                              <option value="">Job Level</option>
                              {jobLevel.map((job, i) => {
                                return (
                                  <option key={i} value={job.value}>
                                    {job.name}
                                  </option>
                                )
                              })}
                            </select>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Number of employees */}
                      <Field name="numberOfEmployees" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <select id="numberOfEmployees" {...input}>
                              <option value="">Number of Employees</option>
                              {numberOfEmployees.map((number, i) => {
                                return (
                                  <option key={i} value={number.value}>
                                    {number.amount}
                                  </option>
                                )
                              })}
                            </select>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      {/* Industry */}
                      <Field name="industry" validate={required}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <select id="industry" {...input}>
                              <option value="">Industry</option>
                              {industries.map((industry, i) => {
                                return (
                                  <option key={i} value={industry.value}>
                                    {industry.name}
                                  </option>
                                )
                              })}
                            </select>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      <Field name="password" validate={validateFormField([validations.required, validations.password])} validateFields={['password']}>
                        {({ input, meta }) => (
                          <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                            <input className={inputStyles.input} type="password" {...input} placeholder={data.password} />
                            <label htmlFor="password">{data.password}</label>
                            <InputTooltip />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      <div className={styles.checkboxStyles}>
                        <Field name="consentToProcessing" component="input" type="checkbox" id="consentToProcessing" />
                        <label htmlFor="consentToProcessing">{data.consent}</label>
                      </div>
                      <div className={styles.privacyPolicy} dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
                      <button className={clsx(styles.submitBtn, submitting && styles.disabled)} type="submit">
                        {submitting ? 'Please wait' : submitButton}
                      </button>
                      <div className={styles.loginLink}>
                        <a href={data.loginLink} target="_top">
                          {data.loginText}
                        </a>
                      </div>
                    </form>
                  )
                }}
              />
            )}
          </div>
        </div>
        <div className={clsx(styles.item, styles.hasBullet)}>
          <div className={styles.listWrapper} dangerouslySetInnerHTML={{ __html: bulletPointsList }} />
        </div>
        {data?.imagesCollection?.items?.length > 0 ? (
          <>
            <div className={styles.item}>
              <div className={styles.logosWrapper}>
                <div className={styles.logosItem}>
                  {data?.imagesCollection?.items?.map((img, index) => (
                    <Image key={index} src={img.url} alt={img.title} layout="fixed" width="87" height="44" loading="eager" />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
