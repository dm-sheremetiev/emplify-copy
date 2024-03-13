import React from 'react'
import clsx from 'clsx';
import { Field } from 'react-final-form';
import memoize from 'lodash.memoize';
import MultiStepForm, { FormStep }from './multiStepForm'
import styles from './cx-index-banner.module.scss'
import inputStyles from './components/input.module.scss';
import {
  countries,
  industries,
  numberOfEmployees
} from '@/components/blocks/UiTrialFormBanner/data/definitions';
import { validations } from 'utils/validation';
import {
  INSTAGRAM_REGEXP,
  FACEBOOK_REGEXP,
  YOUTUBE_REGEXP,
  TIKTOK_REGEXP,
  TWITTER_REGEXP
} from 'utils/validations-utils'
import cslx from 'clsx';
import InputTooltip from './components/input-tooltip'
import { useRouter } from 'next/router';
import { sleep } from 'utils/helper-functions';
import Loader from './components/loader'
import { jsonModel } from '@/interfaces/blocks';

const INCORRECT_FORMAT = 'Incorrect format'
const INVALID_SOCIAL_PROFILE_TEXT = 'Profile not found.'
const [FACEBOOK, INSTAGRAM, YOUTUBE, TWITTER] = ['facebook', 'instagram', 'youtube', 'twitter', 'tiktok']
const EMAIL_API_CHECK_TYPE = 'emailApiCheck'
const SLEEP_TIMER_FOR_DEBOUNCE = 400

export function UiCxIndexBannerComp(props: { block: jsonModel }): JSX.Element {
  const { basePath } = useRouter();

  const content = () => props?.block?.data?.content.map((item, index): JSX.Element => {
    return <p key={index}>{item}</p>
  });

  const required = (value) => (!value || value.trim().length === 0) ? 'This field is required' : undefined;

  const accountAvailable = async (type: string, value: string) => {
    try {
      await sleep(SLEEP_TIMER_FOR_DEBOUNCE, type);

    try {
      const searchQuery = value;

      const data = await fetch(`${basePath}/api/social-search-validation`, {
        method: 'POST',
        body: JSON.stringify({
          [type]: searchQuery
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const socialProfiles = await data.json();
      if (!socialProfiles[type]?.exists) {
        return INVALID_SOCIAL_PROFILE_TEXT;
      }
    } catch (err) {
      console.error(err);
      return INVALID_SOCIAL_PROFILE_TEXT;
    }
    } catch(err) {
      // do nothing
    }
  };

  const accountAvailableFacebook = memoize(async (value: string) => {
    if (!value) {
      return;
    }
    if (!FACEBOOK_REGEXP.test(value)) return INCORRECT_FORMAT;
    return await accountAvailable(FACEBOOK, value);
  });

  const accountAvailableInstagram = memoize(async (value: string) => {
    if (!value) {
      return;
    }
    if (!INSTAGRAM_REGEXP.test(value)) return INCORRECT_FORMAT;
    return await accountAvailable(INSTAGRAM, value);
  });

  const accountAvailableTwitter = memoize(async (value: string) => {
    if (!value) {
      return;
    }
    if (!TWITTER_REGEXP.test(value)) return INCORRECT_FORMAT;
    return await accountAvailable(TWITTER, value);
  });

  const accountAvailableYoutube = memoize(async (value: string) => {
    if (!value) {
      return;
    }
    if (!YOUTUBE_REGEXP.test(value)) return INCORRECT_FORMAT;
    return await accountAvailable(YOUTUBE, value);
  });

  const accountAvailableTiktok = memoize(async (value: string) => {
    if (!value) {
      return;
    }
    if (!TIKTOK_REGEXP.test(value)) return INCORRECT_FORMAT;
  });

  const emailValid = memoize(async (value: string) => {
    const requiredMsg = validations.required(value)?.message;
    if (requiredMsg) return requiredMsg;
    const emailValidFormatMsg = validations.email(value)?.message;
    if (emailValidFormatMsg) return emailValidFormatMsg;
    try {
      await sleep(SLEEP_TIMER_FOR_DEBOUNCE, EMAIL_API_CHECK_TYPE);
    } catch (e) {
      // do nothing
    }
      const emailApiCheckMsg = await validations.emailApiCheck(value);
      if (emailApiCheckMsg?.message) return emailApiCheckMsg.message;
  });

  return (
    <div className={styles.cxIndexBanner}>
      <div className={styles.innerWrapper}>
        <div>
          <div className={styles.headingWrapper}>
            <img src="/images/emplifi-logo-white-RGB.svg" alt="Emplifi Logo" />
            <h1>CX Index</h1>
          </div>
          <div className={styles.contentWrapper}>
            {content()}
          </div>
        </div>
        <div className={clsx(styles.item, styles.hasForm)}>
          <div className={styles.formWrapper}>
            <MultiStepForm>
              <FormStep>
                <h2 className={styles.stepHeading}>Tell us about yourself</h2>
                <div className={styles.formGrid}>
                  {/* First Name */}
                  <Field name="first_name" validate={required}>
                    {({ input, meta }) => (
                      <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <input {...input} className={inputStyles.input} type="text" placeholder="First Name" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {/* Last Name */}
                  <Field name="last_name" validate={required}>
                    {({ input, meta }) => (
                      <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <input {...input} className={inputStyles.input} type="text" placeholder="Last Name" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {/* Email */}
                  <Field name="email" maxLength={80} validate={emailValid}>
                    {({ input, meta }) => (
                      <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <input {...input} className={inputStyles.input} type="email" name="email" placeholder="Email" />
                        {meta.validating && meta.touched && <Loader />}
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {/* Phone */}
                  <Field name="phone" validate={required}>
                    {({ input, meta }) => (
                      <div className={cslx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <input {...input} className={inputStyles.input} type="tel" placeholder="Phone Number" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {/* Company */}
                  <Field name="company" validate={required}>
                    {({ input, meta }) => (
                      <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <input {...input} className={inputStyles.input} type="text" placeholder="Company" />
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
                  {/* Location */}
                  <Field name="country" validate={required}>
                    {({ input, meta }) => (
                      <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <select id="country" {...input}>
                          <option value="">Select Location</option>
                          {countries.map((country) => {
                            return (
                              <option key={country.name} value={country.name}>
                                {country.name}
                              </option>
                            )
                          })}
                        </select>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {/* Number of employees */}
                  <Field name="number_of_employees" validate={required}>
                    {({ input, meta }) => (
                      <div className={cslx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error)}>
                        <select id="number_of_employees" {...input}>
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
                </div>
              </FormStep>

              <FormStep>
                <h2 className={styles.stepHeading}>Enter your social media profiles</h2>
                <Field name="facebook_page" validate={accountAvailableFacebook}>
                  {({ input, meta }) => (
                    <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error, inputStyles.withIcon)}>
                      <img src="/images/social-icons/facebook-ico.svg" alt="Facebook icon" />
                      <input {...input} className={inputStyles.input} type="text" placeholder="Facebook Page" />
                      <InputTooltip text="Facebook profile URL must be in format e.g. https://www.facebook.com/yourAccount" />
                      {meta.validating && meta.active && <Loader />}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="instagram_profile" validate={accountAvailableInstagram}>
                  {({ input, meta }) => (
                    <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error, inputStyles.withIcon)}>
                      <img src="/images/social-icons/instagram-ico.svg" alt="Instagram icon" />
                      <input {...input} className={inputStyles.input} type="text" placeholder="Instagram Profile" />
                      <InputTooltip text="Instagram profile URL must be in format e.g. https://www.instagram.com/yourAccount/" />
                      {meta.validating && meta.active && <Loader />}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="twitter_profile" validate={accountAvailableTwitter}>
                  {({ input, meta }) => (
                    <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error, inputStyles.withIcon)}>
                      <img src="/images/social-icons/twitter-ico.svg" alt="Twitter icon" />
                      <input {...input} className={inputStyles.input} type="text" placeholder="Twitter Profile" />
                      <InputTooltip text="Twitter profile URL must be in format e.g. https://twitter.com/yourAccount" />
                      {meta.validating && meta.active && <Loader />}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="youtube_channel" validate={accountAvailableYoutube}>
                  {({ input, meta }) => (
                    <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error, inputStyles.withIcon)}>
                      <img src="/images/social-icons/youtube-ico.svg" alt="Youtube icon" />
                      <input {...input} className={inputStyles.input} type="text" placeholder="Youtube Channel" />
                      <InputTooltip text="Youtube profile URL must be in format e.g. https://www.youtube.com/c/yourAccount" />
                      {meta.validating && meta.active && <Loader />}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="tiktok_profile" validate={accountAvailableTiktok}>
                  {({ input, meta }) => (
                    <div className={clsx(inputStyles.inputGroup, meta.error && meta.touched && inputStyles.error, inputStyles.withIcon)}>
                      <img src="/images/social-icons/tiktok-ico.svg" alt="TikTok icon" />
                      <input {...input} className={inputStyles.input} type="text" placeholder="TikTok Profile" />
                      <InputTooltip text="Tiktok profile URL must be in format e.g. https://www.tiktok.com/@yourAccount" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </FormStep>
            </MultiStepForm>
          </div>
        </div>
      </div>
    </div>
  )
}
