import React, { ReactNode } from 'react';

export type IconsType =
  | 'grid'
  | 'thumbs-up'
  | 'cloud'
  | 'sms'
  | 'delivered'
  | 'image'
  | 'desktop'
  | 'add'
  | 'equals'
  | 'checklist'
  | 'knight'
  | 'checkout-success'
  | 'phone-call'
  | 'connect-success'
  | 'man'
  | 'woman'
  | 'support'
  | 'directions'
  | 'find-user'
  | 'payment'
  | 'settings'
  | 'hand-success'
  | 'lightbulb'
  | 'location'
  | 'care'
  | 'chat'
  | 'pen-tool'
  | 'idea'
  | 'brain'
  | 'atom'
  | 'calculator'
  | 'document'
  | 'storefront'
  | 'cash'
  | 'private-content'
  | 'phone'
  | 'email'
  | 'speaking'
  | 'laptop'
  | 'video-call'
  | 'package'
  | 'wallet'
  | 'person-checklist'
  | 'user-swap'
  | 'person-time'
  | 'safety-verified'
  | 'success'
  | 'email-confirmed'
  | 'calendar-confirmed'
  | 'man-confirmed'
  | 'woman-confirmed'
  | 'sms-confirmed'
  | 'laptop-confirmed'
  | 'bullseye'
  | 'sms-conversation'
  | 'iot'
  | 'eye'
  | 'devices'
  | 'pie-chart'
  | 'cell-phone'
  | 'heart'
  | 'profile'
  | 'chevron-down'
  | 'search-icon'
  | 'chevron-down-small'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'empathy'
  | 'brand-connection'
  | 'facebook'
  | 'linkedin-second' // LinkedIn icon with different shape
  | 'envelope'
  | 'menu'
  | 'menu-2'
  | 'close'
  | 'close-small'
  | 'cloud-message'
  | 'cloud-bag'
  | 'cloud-heart'
  | 'tiktok';

export type SingleIcon = {
  path?: ReactNode | ((id: string) => any);
  viewBox?: string;
  strokeWidth?: number;
};

export type CustomIconsCollection = {
  [key in IconsType]: SingleIcon;
};

const CustomIcons: CustomIconsCollection = {
  grid: {
    viewBox: '0 0 70.424 69.574',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 139"
          transform="translate(-101.602 -649.006)"
        >
          <path d="M102.6 717.58v-61.974a5.616 5.616 0 015.6-5.6h57.224a5.615 5.615 0 015.6 5.6v61.974" data-name="Path 357"></path>
          <path
            d="M161.7 709.052h-10.07v-10.07h10.07zm-20.018 0h-10.07v-10.07h10.07zm-20.017 0H111.6v-10.07h10.07zm40.035-18.6h-10.07v-10.07h10.07zm-20.018 0h-10.07v-10.07h10.07zm-20.017 0H111.6v-10.07h10.07zm40.035-18.6h-10.07v-10.07h10.07zm-20.018 0h-10.07v-10.07h10.07zm-20.017 0H111.6v-10.07h10.07z"
            data-name="Path 358"
          ></path>
        </g>
      </>
    )
  },
  'thumbs-up': {
    viewBox: '0 0 72.191 68.453',
    path: (
      <>
        <g data-name="Group 140" transform="translate(-102.244 -360.047)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M167.684 408.53a5.471 5.471 0 003.883-1.619 5.413 5.413 0 001.617-3.86 5.508 5.508 0 00-5.35-5.5 6.1 6.1 0 00-.474-12.173h-21.486c.748-1.6 1.691-3.885 2.836-7 2.792-7.668-2.041-17.848-7.916-17.3-3.759.349-4.008 5.627-3.708 9.337a8.383 8.383 0 01-2.166 6.324c-3.452 3.891-8.891 12.656-8.891 16.855v26.864a7.06 7.06 0 007.07 7.045h32.894a1.281 1.281 0 00.3-.023 4.266 4.266 0 000-8.516v-.247h.9a5.072 5.072 0 003.535-1.47 4.983 4.983 0 00-3.535-8.49h-.9v-.224zm-48.208 18.97h-11.452a4.782 4.782 0 01-4.78-4.78v-30.373a4.783 4.783 0 014.78-4.782h11.452"
            data-name="Path 359"
          ></path>
        </g>
      </>
    )
  },
  cloud: {
    viewBox: '0 0 74 51.199',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 141"
          transform="translate(-388.435 -363.801)"
        >
          <path
            d="M416.264 387.111c-3.36-3.5-6.27-4.924-11.315-4.924l-.786.028a15.892 15.892 0 00-14.728 15.8v.6c0 6.594 4.009 12.727 9.8 14.924m51.693-.014a15.9 15.9 0 0010.506-14.91v-.6a15.883 15.883 0 00-15.834-15.838h-4.028v-1.238a16.137 16.137 0 00-31.719-4.2"
            data-name="Path 360"
          ></path>
          <path d="M0 0L31.152 0" data-name="Line 1" transform="translate(409.149 414)"></path>
        </g>
      </>
    )
  },
  sms: {
    viewBox: '0 0 58.481 72.938',
    path: (
      <>
        <g data-name="Group 144" transform="translate(-257.935 -359)">
          <g data-name="Group 142">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M263.7 416.938h29.679m4.777-11.323v22.011a3.309 3.309 0 01-3.21 3.312h-32.8a3.308 3.308 0 01-3.21-3.312v-64.418a3.217 3.217 0 013.21-3.208h32.8a3.218 3.218 0 013.21 3.208v4.039"
              data-name="Path 361"
            ></path>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M292.012 400.63h23.4v-28.505h-41.259v28.505h11.363l-7.546 7.607m-2.09 15.5h5.333"
            data-name="Path 362"
          ></path>
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 143">
            <path d="M286.981 388.815a1.854 1.854 0 10-1.854-1.854 1.854 1.854 0 001.854 1.854" data-name="Path 363"></path>
            <path d="M295.16 388.815a1.854 1.854 0 10-1.855-1.854 1.854 1.854 0 001.855 1.854" data-name="Path 364"></path>
            <path d="M303.338 388.815a1.854 1.854 0 10-1.854-1.854 1.854 1.854 0 001.854 1.854" data-name="Path 365"></path>
          </g>
        </g>
      </>
    )
  },
  delivered: {
    viewBox: '0 0 72.496 57.122',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 148"
          transform="translate(-389.939 -655.784)"
        >
          <g data-name="Group 147">
            <g data-name="Group 145">
              <path d="M438.706 696.135l5.316 7.363 9.8-11.714" data-name="Path 366"></path>
              <path d="M439.494 683.946a14.876 14.876 0 11-4.725 4.026" data-name="Path 367"></path>
            </g>
            <g data-name="Group 146">
              <path d="M427.857 705.179l-10.547 4.53-26.05-11.235" data-name="Path 368"></path>
              <path d="M391.26 668.106l25.392-11.322 26.815 11.322-26.156 10.934-26.05-10.934v25.223" data-name="Path 369"></path>
              <path d="M403.348 681.722V673.3l25.552-10.815" data-name="Path 370"></path>
            </g>
          </g>
          <path d="M0 0L0 30.653" data-name="Line 2" transform="translate(417.311 679.04)"></path>
          <path d="M0 0L0 8.811" data-name="Line 3" transform="translate(443.462 668.298)"></path>
        </g>
      </>
    )
  },
  image: {
    viewBox: '0 0 71.544 59.45',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 149"
          transform="translate(-677.165 -509.042)"
        >
          <path d="M0 0H69.544V57.45H0z" data-name="Rectangle 23" transform="translate(678.165 510.042)"></path>
          <path d="M747.71 567.492l-21.166-19.654-21.166 19.654z" data-name="Path 374"></path>
          <path d="M726.544 567.492L702.355 543.3l-24.189 24.189z" data-name="Path 375"></path>
          <circle cx="6.047" cy="6.047" r="6.047" data-name="Ellipse 1" transform="translate(705.378 522.137)"></circle>
        </g>
      </>
    )
  },
  desktop: {
    viewBox: '0 0 72.371 66.579',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 154"
          transform="translate(-534.064 -364.241)"
        >
          <g data-name="Group 151">
            <g data-name="Group 150">
              <path d="M602.5 365.241H538a2.941 2.941 0 00-2.932 2.932v41.049h70.371v-41.049a2.94 2.94 0 00-2.939-2.932z" data-name="Path 376"></path>
              <path d="M535.064 415.087a2.941 2.941 0 002.936 2.932h64.5a2.941 2.941 0 002.932-2.932v-5.865h-70.368z" data-name="Path 377"></path>
            </g>
            <path d="M0 0H8.796V11.728H0z" data-name="Rectangle 24" transform="translate(565.851 418.019)"></path>
            <path d="M580.512 429.82h-20.525a.073.073 0 010-.146h20.525a.073.073 0 010 .146z" data-name="Path 378"></path>
          </g>
          <g data-name="Group 152">
            <path d="M0 0H32.735V29.321H0z" data-name="Rectangle 25" transform="translate(542.394 372.571)"></path>
            <path d="M565.5 401.892l-11.553-11.553-11.553 11.553z" data-name="Path 379"></path>
            <path d="M565.5 392.264l-4.814 4.814 4.814 4.814h9.628z" data-name="Path 380"></path>
            <path d="M563.576 382.418a3.852 3.852 0 11-3.851-3.851 3.851 3.851 0 013.851 3.851z" data-name="Path 381"></path>
          </g>
          <g data-name="Group 153">
            <path d="M0 0H15.645V7.33H0z" data-name="Rectangle 26" transform="translate(582.46 388.698)"></path>
            <path d="M0 0H15.645V8.796H0z" data-name="Rectangle 27" transform="translate(582.46 372.571)"></path>
            <path d="M0 0H15.645V7.33H0z" data-name="Rectangle 28" transform="translate(582.46 381.367)"></path>
          </g>
        </g>
      </>
    )
  },
  add: {
    viewBox: '0 0 71.798 71.798',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 157" transform="translate(-821.637 -216.202)">
          <path d="M0 0L0 71.798" data-name="Line 6" transform="translate(857.536 216.202)"></path>
          <path d="M71.798 0L0 0" data-name="Line 7" transform="translate(821.637 252.101)"></path>
        </g>
      </>
    )
  },
  equals: {
    viewBox: '0 0 45 22.001',
    path: (
      <>
        <defs>
          <clipPath id="equals_clip_path">
            <path fill="none" d="M0 0H45V22.001H0z" data-name="Rectangle 17" transform="translate(0 -.001)"></path>
          </clipPath>
        </defs>
        <g transform="translate(1 -.999)">
          <g data-name="Group 37" transform="translate(-1 1)">
            <g clipPath="url(#equals_clip_path)">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M41.379 0L0 0"
                data-name="Line 25"
                transform="translate(1.81 19.537)"
              ></path>
            </g>
          </g>
          <g>
            <g clipPath="url(#equals_clip_path)" transform="translate(-1 1)">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M41.379 0L0 0"
                data-name="Line 26"
                transform="translate(1.81 2.463)"
              ></path>
            </g>
          </g>
        </g>
      </>
    )
  },
  checklist: {
    viewBox: '0 0 68.586 73.519',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 159" transform="translate(-680.935 -359)">
          <path strokeLinecap="round" strokeLinejoin="round" d="M727.558 417.338l3.7 3.7 8.631-8.632" data-name="Path 385"></path>
          <g strokeMiterlimit="10" data-name="Group 158">
            <path
              d="M716.461 364.932h-2.591a6.165 6.165 0 00-12.081 0H699.2a3.7 3.7 0 00-3.7 3.7v3.7a1.235 1.235 0 001.233 1.235h22.2a1.236 1.236 0 001.234-1.235v-3.7a3.7 3.7 0 00-3.706-3.7z"
              data-name="Path 386"
            />
            <path
              strokeLinecap="round"
              d="M720.16 369.865h8.631a4.933 4.933 0 014.932 4.933v19.728M717.2 431.518h-30.332a4.933 4.933 0 01-4.933-4.932V374.8a4.934 4.934 0 014.933-4.933h8.63"
              data-name="Path 387"
            />
            <path
              strokeLinecap="round"
              d="M697.965 416.722h12.33m-12.33-14.8h12.33m-12.33-14.8h24.661m25.9 29.594a14.8 14.8 0 10-14.8 14.8 14.8 14.8 0 0014.795-14.794z"
              data-name="Path 388"
            />
            <path d="M710.295 366.166a2.466 2.466 0 10-2.465 2.465 2.465 2.465 0 002.465-2.465z" data-name="Path 389"></path>
            <path d="M693.76 386.839a2.466 2.466 0 10-2.466 2.466 2.465 2.465 0 002.466-2.466z" data-name="Path 390"></path>
            <path d="M693.76 401.78a2.466 2.466 0 10-2.466 2.466 2.465 2.465 0 002.466-2.466z" data-name="Path 391"></path>
            <path d="M693.76 416.722a2.466 2.466 0 10-2.466 2.465 2.466 2.466 0 002.466-2.465z" data-name="Path 392"></path>
          </g>
        </g>
      </>
    )
  },
  knight: {
    viewBox: '0 0 48.746 70.941',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 162" transform="translate(-977.935 -215)">
          <path
            d="M985.227 266.632c-.06-1.973-.96-3.888-2.1-6.315-1.867-3.973-4.191-8.917-4.191-16.5C978.935 226.4 990.2 216 1009.093 216c-18.891 0-30.158 10.4-30.158 27.812 0 7.588 2.324 12.532 4.191 16.5 1.141 2.432 2.041 4.347 2.101 6.32z"
            data-name="Path 397"
          ></path>
          <path d="M1022.772 278.818h0z" data-name="Path 398"></path>
          <path
            d="M1022.772 278.818c0-3.012-.785-3.143-4.191-6.548s-1.7-5.5-1.178-11.526-5.5-12.181-9.037-14.538-6.418-5.5-4.594-6.549c3.22-1.344 10.836 1.2 15.326 2.936a4.683 4.683 0 005.606-1.792h0a4.684 4.684 0 00-.721-6.023 3999.98 3999.98 0 00-13.054-12.048 3.8 3.8 0 00-2.618-1.015c-15.849.267-23 8.9-23 21.479 0 11.132 6.156 15.193 6.156 22.527 0 2.1-3.667 6.942-5.5 8.513s-1.964 4.584-1.964 4.584v6.123h38.767v0h-38.765v-6.123s.131-3.012 1.964-4.584 5.5-6.418 5.5-8.513c0-7.334-6.156-11.4-6.156-22.527 0-12.578 7.148-21.212 23-21.479a3.8 3.8 0 012.618 1.015 3999.98 3999.98 0 0113.054 12.048 4.684 4.684 0 01.721 6.023h0a4.683 4.683 0 01-5.606 1.792c-4.49-1.739-12.106-4.28-15.326-2.936-1.824 1.048 1.057 4.191 4.594 6.549s9.561 8.513 9.037 14.538-2.227 8.12 1.178 11.526 4.189 3.536 4.189 6.548z"
            data-name="Path 399"
          ></path>
          <path d="M994.784 272.7h0z" data-name="Path 400"></path>
          <path d="M1006.2 228.09l3.772 2.628z" data-name="Path 401"></path>
        </g>
      </>
    )
  },
  'checkout-success': {
    viewBox: '0 0 71.67 57.754',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 166" transform="translate(-965.6 -368.024)">
          <g data-name="Group 164">
            <path strokeMiterlimit="10" d="M0 0L0 21.46" data-name="Line 8" transform="translate(1000.343 382.039)"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M979.82 392.369h31.267l-1.366 9.6" data-name="Path 402"></path>
            <path strokeMiterlimit="10" d="M0 0L3.346 22.847" data-name="Line 9" transform="translate(988.169 381.978)"></path>
            <path strokeLinejoin="round" d="M31.657 0L0 0" data-name="Line 10" transform="translate(976.489 381.734)"></path>
            <path
              strokeLinejoin="round"
              d="M1020.33 412.481h-37.064c-2.4 0-2.773-5.325.965-6.148l33.526-5.508 1.819-4.65"
              data-name="Path 403"
            ></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M982.008 401.319l-8.493-27.178H966.6" data-name="Path 404"></path>
            <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 163">
              <path d="M990.851 421.112a3.665 3.665 0 11-3.665-3.665 3.666 3.666 0 013.665 3.665z" data-name="Path 405"></path>
              <path d="M1017.843 421.112a3.665 3.665 0 11-3.665-3.665 3.665 3.665 0 013.665 3.665z" data-name="Path 406"></path>
            </g>
          </g>
          <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 165">
            <path d="M1018.117 380.178l4.243 5.878 7.823-9.351" data-name="Path 407"></path>
            <path d="M1019.063 370.286a11.885 11.885 0 11-4.079 3.376" data-name="Path 408"></path>
          </g>
        </g>
      </>
    )
  },
  'phone-call': {
    viewBox: '0 0 59.44 69.616',
    path: (
      <>
        <g data-name="Group 169" transform="translate(-105.349 -505.222)">
          <g data-name="Group 168">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M137.469 549.47v9.443l17.9-13.6a21.841 21.841 0 10-23.142 2.352"
              data-name="Path 409"
            ></path>
            <g data-name="Group 167">
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M108.784 538.412c-.352.219-.57.364-.57.364-2.006 1.245-1.853 2.664-1.853 2.664-.265 8.465 7.051 17.94 7.593 18.75.752.988 7.043 10.858 15.105 13.458 0 0 1.285.62 3.133-.848l.571-.447c.73-.679 3.228-2.965 3.326-3.4a1.662 1.662 0 00-.546-1.737l-5.377-5.1a2.26 2.26 0 00-2.533-.59l-4.022 1.393a73.059 73.059 0 01-8.971-12.733l2.662-3.316a2.261 2.261 0 00.3-2.585l-3-6.784a1.661 1.661 0 00-1.451-1.1 5.321 5.321 0 00-2.246.789z"
                data-name="Path 410"
              ></path>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M141.939 516.979l3.154 6.391 7.053 1.025-5.1 4.974 1.2 7.024-6.308-3.316-6.308 3.316 1.2-7.024-5.1-4.974 7.053-1.025z"
            data-name="Path 411"
          ></path>
        </g>
      </>
    )
  },
  'connect-success': {
    viewBox: '0 0 72.941 59.332',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 173" transform="translate(-245.538 -511.18)">
          <path strokeLinecap="round" strokeLinejoin="round" d="M290.3 551.385l7.448 7.925 10.24-14.761" data-name="Path 412"></path>
          <g data-name="Group 172">
            <g strokeLinejoin="round" data-name="Group 171">
              <g data-name="Group 170">
                <path d="M0 53.834L0 0" data-name="Line 11" transform="translate(273.459 512.235)"></path>
                <path d="M32.013 0L0 0" data-name="Line 12" transform="translate(250.731 539.059)"></path>
                <path d="M270.832 512.49c-3.516 3.6-22.7 25.484.528 53.512" data-name="Path 413"></path>
                <path d="M276 512.394a39.307 39.307 0 0110.671 22.246" data-name="Path 414"></path>
                <path d="M293.924 521.881c-7.392 4.5-20.856 9.6-37.332 1.869" data-name="Path 415"></path>
              </g>
              <path d="M278.939 550.778a38.544 38.544 0 00-21.743 3.337" data-name="Path 416"></path>
            </g>
            <path strokeMiterlimit="10" d="M282.21 564.442a26.871 26.871 0 1116.858-33.384" data-name="Path 417"></path>
          </g>
          <path
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M289.128 539.245a17.183 17.183 0 11-3.726 4.486"
            data-name="Path 418"
          ></path>
        </g>
      </>
    )
  },
  man: {
    viewBox: '0 0 65.527 70.218',
    path: (
      <>
        <g data-name="Group 182" transform="translate(-391.962 -505.207)">
          <g data-name="Group 181">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 174">
              <path
                d="M424.724 506.207c-13.813 0-14.581 8.354-13.615 18.509.969 10.173 7.362 18.5 13.615 18.5s12.647-8.328 13.615-18.5c.961-10.155.199-18.509-13.615-18.509z"
                data-name="Path 419"
              ></path>
              <path strokeLinecap="round" d="M428.812 514.408s-1.433 6.791-11.677 6.945" data-name="Path 420"></path>
              <path strokeLinecap="round" d="M427.607 517.223A38.1 38.1 0 00438.193 522" data-name="Path 421"></path>
            </g>
            <g data-name="Group 180">
              <g data-name="Group 177">
                <g data-name="Group 175">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1.919 0L0 15.223"
                    data-name="Line 13"
                    transform="translate(420.63 559.084)"
                  ></path>
                </g>
                <g data-name="Group 176">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M0 0L1.919 15.223"
                    data-name="Line 14"
                    transform="translate(426.899 559.084)"
                  ></path>
                </g>
              </g>
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 178">
                <path
                  d="M393.034 574.308l1.179-15.709c1.167-8.674 6.38-9.64 6.38-9.64s6.157-1.6 12.186-2.612l5.277 10.676"
                  data-name="Path 422"
                ></path>
                <path
                  d="M456.417 574.308l-1.183-15.708c-1.164-8.674-6.378-9.64-6.378-9.64s-6.158-1.6-12.187-2.612l-5.276 10.676"
                  data-name="Path 423"
                ></path>
              </g>
              <g data-name="Group 179">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M424.743 561.23l-5.525-6.238 5.49-6.235h.036l5.487 6.235z"
                  data-name="Path 424"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </>
    )
  },
  woman: {
    viewBox: '0 0 58.948 70.709',
    path: (
      <>
        <g data-name="Group 187" transform="translate(-539.961 -504.663)">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" data-name="Group 186">
            <g strokeLinejoin="round" data-name="Group 183">
              <path d="M587.092 538.733v-14.528c-.256-19.83-17.474-18.5-17.474-18.5h-.37s-17.219-1.333-17.47 18.5v14.528" data-name="Path 425"></path>
              <path
                d="M558.947 525.37c0 8.256 4.993 16.287 10.62 16.287 5.7 0 10.018-8 10.018-16.254 0 0 .318-5.432-2.449-8.975 0 0-5.957 7.2-24.677 8.246"
                data-name="Path 426"
              ></path>
            </g>
            <g data-name="Group 185">
              <path strokeMiterlimit="10" d="M557.622 546.354l-6.543 1.414s-7.856 1.548-8.9 8.148l-1.159 18.395" data-name="Path 427"></path>
              <path strokeLinejoin="round" d="M569.416 567.49l-8.616-24.022-9 10.552h5.848" data-name="Path 428"></path>
              <g data-name="Group 184">
                <path strokeMiterlimit="10" d="M581.248 546.354l6.543 1.414s7.856 1.548 8.9 8.148l1.159 18.395" data-name="Path 429"></path>
                <path strokeLinejoin="round" d="M569.452 567.49l8.615-24.021 9 10.552h-5.848" data-name="Path 430"></path>
              </g>
            </g>
          </g>
        </g>
      </>
    )
  },
  support: {
    viewBox: '0 0 72.682 66.265',
    path: (
      <>
        <g data-name="Group 193" transform="translate(-677.753 -218.235)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M719.47 271.841c16.873-.643 18.852-14.453 18.852-14.453s.488-3.556-2.44-4.917"
            data-name="Path 431"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M729.713 273.834c-3.3 5.187-8.289 9.666-15.65 9.666h-.44c-17.482 0-20.6-25.265-20.6-25.265"
            data-name="Path 432"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M694 247.821s16.3 3.514 22.652-12.845c.9-2.312.987-2.585 3.3-.207 5.464 5.624 14.266 8.188 14.268 8.19l.583.209.007 11.4"
            data-name="Path 433"
          ></path>
          <g data-name="Group 192">
            <g data-name="Group 189">
              <g data-name="Group 188">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M706.117 254.872a.9.9 0 11-.9-.9.9.9 0 01.9.9z"
                  data-name="Path 434"
                ></path>
              </g>
            </g>
            <g data-name="Group 191">
              <g data-name="Group 190">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M724.686 254.872a.9.9 0 11-.9-.9.9.9 0 01.9.9z"
                  data-name="Path 435"
                ></path>
              </g>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M712.076 268.767h4.854a2.426 2.426 0 012.427 2.426v1.088a2.426 2.426 0 01-2.427 2.426h-4.855a2.426 2.426 0 01-2.426-2.426v-1.087a2.427 2.427 0 012.427-2.427z"
            data-name="Rectangle 33"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M737.841 275.125c7.985 4.477 11.594-1.153 11.594-1.153-5.629-4.908-5.077-7.932-5.252-11.691-.186-3.945.2-4.811 1.353-10.391 3.62-29.148-24.532-32.655-31.443-32.655s-35.084 3.362-31.445 32.655c1.155 5.58 1.541 6.446 1.357 10.391-.177 3.759.377 6.783-5.252 11.691 0 0 3.606 5.63 11.591 1.153"
            data-name="Path 436"
          ></path>
        </g>
      </>
    )
  },
  directions: {
    viewBox: '0 0 73.507 65.956',
    path: (
      <>
        <g data-name="Group 217" transform="translate(-820.682 -506.333)">
          <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 194">
            <path strokeMiterlimit="10" d="M857.436 507.333a5.612 5.612 0 11-5.614 5.612 5.611 5.611 0 015.614-5.612z" data-name="Path 437"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M863.585 571.265l.532-21.962c2.062-.744 4.525-2.465 4.306-4.633l-1.683-16.712a4.486 4.486 0 00-4.357-3.942h-9.9a4.486 4.486 0 00-4.357 3.942l-1.685 16.712c-.217 2.168 2.245 3.889 4.307 4.633l.533 21.962"
              data-name="Path 438"
            ></path>
          </g>
          <g data-name="Group 216">
            <g data-name="Group 201">
              <g data-name="Group 197">
                <g data-name="Group 196">
                  <g data-name="Group 195">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.204 0.001L0 0"
                      data-name="Line 15"
                      transform="translate(878.915 538.995)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M888.654 543.51l4.535-4.535-4.516-4.517"
                  data-name="Path 439"
                ></path>
              </g>
              <g data-name="Group 200">
                <g data-name="Group 199">
                  <g data-name="Group 198">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M0 0L14.204 0.001"
                      data-name="Line 16"
                      transform="translate(821.752 538.972)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M826.218 534.458l-4.537 4.535 4.517 4.517"
                  data-name="Path 440"
                ></path>
              </g>
            </g>
            <g data-name="Group 208">
              <g data-name="Group 204">
                <g data-name="Group 203">
                  <g data-name="Group 202">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.043 10.044L0 0"
                      data-name="Line 17"
                      transform="translate(872.616 554.181)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M876.31 564.26h6.413v-6.388"
                  data-name="Path 441"
                ></path>
              </g>
              <g data-name="Group 207">
                <g data-name="Group 206">
                  <g data-name="Group 205">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M0 0L10.043 10.044"
                      data-name="Line 18"
                      transform="translate(832.212 513.743)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M838.562 513.71h-6.415v6.39"
                  data-name="Path 442"
                ></path>
              </g>
            </g>
            <g data-name="Group 215">
              <g data-name="Group 211">
                <g data-name="Group 210">
                  <g data-name="Group 209">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.044 0L0 10.043"
                      data-name="Line 19"
                      transform="translate(872.631 513.76)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M882.711 520.109V513.7h-6.387"
                  data-name="Path 443"
                ></path>
              </g>
              <g data-name="Group 214">
                <g data-name="Group 213">
                  <g data-name="Group 212">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M0 10.044L10.044 0"
                      data-name="Line 20"
                      transform="translate(832.194 554.164)"
                    ></path>
                  </g>
                </g>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M832.161 557.858v6.415h6.387"
                  data-name="Path 444"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </>
    )
  },
  'find-user': {
    viewBox: '0 0 70.669 70.493',
    path: (
      <>
        <g data-name="Group 220" transform="translate(-966.601 -504.418)">
          <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 219">
            <g data-name="Group 218">
              <path
                strokeLinejoin="round"
                d="M983.175 551.726v-8.971c0-4.938 3.573-6.759 8.17-6.759l5.655 6.221 5.243-6.221c4.6 0 8.568 1.821 8.568 6.759v8.971"
                data-name="Path 445"
              ></path>
              <path strokeMiterlimit="10" d="M1003.731 523.926a6.74 6.74 0 11-13.479 0v-2.535a6.74 6.74 0 1113.479 0z" data-name="Path 446"></path>
            </g>
            <path strokeMiterlimit="10" d="M1017.772 514.025a29.39 29.39 0 11-41.564 0 29.389 29.389 0 0141.564 0z" data-name="Path 447"></path>
            <path strokeMiterlimit="10" d="M1020.5 552.428l14.742 14.741a4.054 4.054 0 01-5.716 5.715l-10.543-10.544" data-name="Path 448"></path>
          </g>
        </g>
      </>
    )
  },
  payment: {
    viewBox: '0 0 61.491 73.295',
    path: (
      <>
        <g data-name="Group 222" transform="translate(-249.173 -647)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M269.647 689.919v-35.857a6.08 6.08 0 016.062-6.062H303.6a6.08 6.08 0 016.062 6.062v48.721a6.079 6.079 0 01-6.062 6.061h-23.387"
            data-name="Path 449"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M0 0L0 60.61"
            data-name="Line 21"
            transform="translate(298.748 648.053)"
          ></path>
          <g data-name="Group 221">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M263.209 697.472l14.085-15.113c2.407-2.485 6.166-2.978 8.355-1.093s2.394 5.772.457 8.639L276 704.893s-5.688 6.754-13.808 9.629"
              data-name="Path 450"
            ></path>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M269.012 671.1s-18.148 15.451-18.564 17.875c-.34 1.971-.355 23.245-.094 30.279"
            data-name="Path 451"
          ></path>
        </g>
      </>
    )
  },
  settings: {
    viewBox: '0 0 71.169 71.17',
    path: (
      <>
        <g data-name="Group 232" transform="translate(-820.752 -648.392)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M847.2 682.931l6.188 8.569 11.412-13.634"
            data-name="Path 458"
          ></path>
          <g data-name="Group 231">
            <g data-name="Group 230">
              <g data-name="Group 229">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 228">
                  <path
                    d="M833.839 670.689a25.874 25.874 0 00-2.806 6.776l-9.281 1.576v9.87l9.281 1.581a25.806 25.806 0 002.837 6.821l-5.478 7.631 6.978 6.977 7.63-5.477a25.914 25.914 0 006.822 2.833l1.577 9.285h9.868l1.582-9.283a26.051 26.051 0 006.823-2.835l7.629 5.477 6.978-6.977-5.476-7.628a26.075 26.075 0 002.85-6.882l9.266-1.523v-9.87l-9.266-1.519a25.928 25.928 0 00-2.818-6.832l5.444-7.677-6.978-6.978-7.679 5.446a25.909 25.909 0 00-6.829-2.819l-1.526-9.27H851.4l-.612 4.134"
                    data-name="Path 459"
                  ></path>
                  <path d="M849.877 658.664a25.919 25.919 0 00-6.827 2.817l-7.68-5.446-6.978 6.975 2.348 3.283" data-name="Path 460"></path>
                </g>
              </g>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M848.109 668.744a17.317 17.317 0 11-5.5 4.686"
              data-name="Path 461"
            ></path>
          </g>
        </g>
      </>
    )
  },
  'hand-success': {
    viewBox: '0 0 72.635 70.716',
    path: (
      <>
        <g data-name="Group 239" transform="translate(-964.758 -649.156)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M991.2 673.212l8.59 11.888 15.824-18.915"
            data-name="Path 462"
          ></path>
          <g data-name="Group 238">
            <g data-name="Group 235">
              <g data-name="Group 234">
                <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 233">
                  <path
                    strokeLinejoin="round"
                    d="M1016.632 697.5l12.721-6.5c2.459-1.32 5.343-.791 6.532 1.423a4.86 4.86 0 01-2.313 6.426l-26.4 14.148-1.4.35-24.617.666s-3.17.887-6.978 5.2"
                    data-name="Path 463"
                  ></path>
                  <path
                    strokeMiterlimit="10"
                    d="M965.435 706.268l11.165-10.277c5.457-3.68 11.929-1.65 11.929-1.65a53.766 53.766 0 008.952 1.011h9.662c2.878 0 5.232 2.055 5.232 4.567s-2.354 4.568-5.232 4.568H993.78"
                    data-name="Path 464"
                  ></path>
                </g>
              </g>
            </g>
            <g data-name="Group 237">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                data-name="Group 236"
              >
                <path d="M984.123 688.255a24.177 24.177 0 012.945-31.284" data-name="Path 465"></path>
                <path d="M993.854 652.333a24.186 24.186 0 0130.718 34.539" data-name="Path 466"></path>
              </g>
            </g>
          </g>
        </g>
      </>
    )
  },
  lightbulb: {
    viewBox: '0 0 54.247 70.312',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 240"
          transform="translate(-542.312 -648.146)"
        >
          <path
            d="M588.522 681.162a18.97 18.97 0 00-18.97-18.97c-10.477 0-19.352 8.5-18.97 18.97.238 6.53 3.469 10.751 7.516 14.17 2.868 2.423 4.395 8.372 4.395 8.372h14.093a12.989 12.989 0 013.768-7.814c8.946-8.023 8.168-11.864 8.168-14.728z"
            data-name="Path 468"
          ></path>
          <path d="M562.921 680.906l6.633 6.611 6.627-6.611" data-name="Path 469"></path>
          <path d="M0 0L0 16.186" data-name="Line 23" transform="translate(569.554 687.518)"></path>
          <path d="M0 0L0 6.96" data-name="Line 24" transform="translate(569.554 649.146)"></path>
          <path d="M0 0L5.767 5.767" data-name="Line 25" transform="translate(543.726 660.221)"></path>
          <path d="M5.65 0L0 5.65" data-name="Line 26" transform="translate(589.494 660.221)"></path>
          <path d="M0 0L18.558 0" data-name="Line 27" transform="translate(560.191 710.675)"></path>
          <path d="M0 0L11.093 0" data-name="Line 28" transform="translate(563.749 717.458)"></path>
        </g>
      </>
    )
  },
  location: {
    viewBox: '0 0 53.674 71.866',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 241"
          transform="translate(-687.255 -647.344)"
        >
          <path
            d="M724.818 695.077c8.916 1.91 15.111 6.126 15.111 11.021 0 6.689-11.568 12.112-25.837 12.112s-25.837-5.423-25.837-12.112c0-4.96 6.362-9.224 15.47-11.1"
            data-name="Path 470"
          ></path>
          <path
            d="M723.874 700.934c4.537 1.036 7.521 2.79 7.521 4.779 0 3.183-7.638 5.764-17.059 5.764s-17.058-2.581-17.058-5.764c0-1.858 2.6-3.511 6.646-4.565"
            data-name="Path 471"
          ></path>
          <path
            d="M708.885 705.141v-14.849a4.771 4.771 0 01-4.77-4.77v-13.436a4.771 4.771 0 014.77-4.77H719.2a4.771 4.771 0 014.77 4.77v13.436a4.771 4.771 0 01-4.77 4.77v14.156"
            data-name="Path 472"
          ></path>
          <circle cx="6.251" cy="6.251" r="6.251" data-name="Ellipse 5" transform="translate(707.79 648.344)"></circle>
        </g>
      </>
    )
  },
  care: {
    viewBox: '0 0 74.072 68.044',
    path: (
      <>
        <g data-name="Group 242" transform="translate(-560.761 -2016.028)">
          <g data-name="Group 227" transform="translate(28.398 1939)">
            <g data-name="Group 226">
              <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 223">
                <path
                  d="M564.135 78.028c-13.382 0-14.126 8.093-13.19 17.929.939 9.856 7.132 17.924 13.19 17.924s12.251-8.068 13.189-17.924c.933-9.836.192-17.929-13.189-17.929z"
                  data-name="Path 452"
                ></path>
                <path strokeLinecap="round" d="M568.094 85.972s-1.387 6.578-11.311 6.728" data-name="Path 453"></path>
                <path strokeLinecap="round" d="M566.927 88.7a36.932 36.932 0 0010.256 4.627" data-name="Path 454"></path>
              </g>
              <g data-name="Group 225">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 224">
                  <path d="M533.435 144l1.142-15.218c1.13-8.4 6.18-9.339 6.18-9.339s5.965-1.553 11.806-2.53l9.875 6.343" data-name="Path 455"></path>
                  <path d="M577.6 117.248a98.714 98.714 0 00-1.9-.335l-8.779 6.585" data-name="Path 456"></path>
                  <path d="M0.323 4.288L0 0" data-name="Line 22" transform="translate(594.514 139.712)"></path>
                </g>
              </g>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M631.798 2054.912h0a6.983 6.983 0 00-9.847 0l-1.016 1.015-1.015-1.015a6.983 6.983 0 00-9.847 0h0a6.983 6.983 0 000 9.847l1.015 1.015 9.847 9.847 9.847-9.847h0l1.016-1.015a6.983 6.983 0 000-9.847z"
            data-name="Path 457"
          ></path>
        </g>
      </>
    )
  },
  chat: {
    viewBox: '0 0 69.5 73.937',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 243"
          transform="translate(-709.333 -2010)"
        >
          <path d="M750.368 2011h-40.035v49.7l9.665-9.665h30.37z" data-name="Path 372"></path>
          <path d="M755.475 2033.237h22.359v49.7l-9.665-9.665h-30.371v-15.185" data-name="Path 373"></path>
        </g>
      </>
    )
  },
  'pen-tool': {
    viewBox: '0 0 73.129 69.5',
    path: (
      <>
        <g data-name="Group 244" transform="translate(-849.451 -2010)">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            data-name="Group 156"
            transform="translate(28.398 1939)"
          >
            <g data-name="Group 155">
              <path d="M869.231 126.435l4.355-11.613-15.968-27.58-15.968 27.581 4.35 11.612z" data-name="Path 382"></path>
              <path d="M0 0H20.323V5.806H0z" data-name="Rectangle 29" transform="translate(847.456 133.694)"></path>
              <circle cx="4.355" cy="4.355" r="4.355" data-name="Ellipse 2" transform="translate(853.263 110.468)"></circle>
              <path d="M0 23.226L0 0" data-name="Line 4" transform="translate(857.618 87.242)"></path>
              <path
                d="M869.957 133.694h-24.678a3.64 3.64 0 01-3.629-3.629h0a3.64 3.64 0 013.629-3.63h24.678a3.641 3.641 0 013.629 3.63h0a3.641 3.641 0 01-3.629 3.629z"
                data-name="Path 383"
              ></path>
            </g>
            <path d="M825.682 107.565a31.935 31.935 0 1163.871 0" data-name="Path 384"></path>
            <path d="M63.871 0L0 0" data-name="Line 5" transform="translate(825.682 75.629)"></path>
            <path d="M0 0H7.258V7.258H0z" data-name="Rectangle 30" transform="translate(853.989 72)"></path>
            <circle cx="3.629" cy="3.629" r="3.629" data-name="Ellipse 3" transform="translate(885.924 72)"></circle>
            <circle cx="3.629" cy="3.629" r="3.629" data-name="Ellipse 4" transform="translate(822.053 72)"></circle>
            <path d="M0 0H7.258V7.258H0z" data-name="Rectangle 31" transform="translate(885.924 103.935)"></path>
            <path d="M0 0H7.258V7.258H0z" data-name="Rectangle 32" transform="translate(822.053 103.935)"></path>
          </g>
        </g>
      </>
    )
  },
  idea: {
    viewBox: '0 0 60.518 70.482',
    path: (
      <>
        <g data-name="Group 245" transform="translate(-997.315 -2012.391)">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            data-name="Group 161"
            transform="translate(28.398 1939)"
          >
            <g data-name="Group 160">
              <path
                d="M1007.517 110.1c0-4.963 6.669-5.97 6.669-14.289a11.431 11.431 0 10-22.863 0c0 8.319 6.668 9.326 6.668 14.289z"
                data-name="Path 393"
              ></path>
              <path d="M997.991 113.857v-3.821h9.526v3.821a4.763 4.763 0 01-9.526 0z" data-name="Path 394"></path>
              <path
                d="M1005.7 99.531a.011.011 0 00-.016 0l-2.929 1.5-2.929-1.5a.011.011 0 00-.016 0l-1.508 1.508a.014.014 0 000 .019.013.013 0 00.02 0l1.5-1.5 2.918 1.5v9.042a.014.014 0 00.028 0v-9.042l2.918-1.5 1.5 1.5.01.005.01-.005a.014.014 0 000-.019z"
                data-name="Path 395"
              ></path>
            </g>
            <path
              d="M977.073 117.193v8.917a5.724 5.724 0 005.707 5.707h5.885a2.853 2.853 0 012.854 2.853v8.2h28.192v-23.546a25.67 25.67 0 10-42.638-19.252l-6.73 11.217a2.854 2.854 0 001.545 4.175z"
              data-name="Path 396"
            ></path>
          </g>
        </g>
      </>
    )
  },
  brain: {
    viewBox: '0 0 67.268 70.161',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" data-name="Group 248" transform="translate(-100.697 -72.589)">
          <path strokeMiterlimit="10" d="M125.245 91.763a9.087 9.087 0 119.087-9.087" data-name="Path 473"></path>
          <path strokeMiterlimit="10" d="M134.346 133.011a8.942 8.942 0 11-15.534-6.268l5.081-5.53" data-name="Path 474"></path>
          <path
            strokeMiterlimit="10"
            d="M149.121 125.991l.7.752a8.943 8.943 0 01-11.2 13.707 8.848 8.848 0 01-4.255-7.439V82.676a9.031 9.031 0 019.021-9.087 9.526 9.526 0 015.908 2.229"
            data-name="Path 475"
          ></path>
          <path
            strokeLinejoin="round"
            d="M110.825 83.562c-2.442 1.3-4.652 4.2-3.024 10.716 0 0-12.862 11.184-1.119 22.648 0 0-3.355 15.1 9.507 15.937"
            data-name="Path 476"
          ></path>
          <g strokeMiterlimit="10" data-name="Group 246">
            <path d="M132.117 76.766a4.753 4.753 0 11-5.876 7.473" data-name="Path 477"></path>
            <path d="M119.361 100.3a4.753 4.753 0 112.269-9.232" data-name="Path 478"></path>
            <path d="M134.031 103.009a4.9 4.9 0 00-6.943.328s-7.295 11.538-12.7 11.538" data-name="Path 479"></path>
            <path d="M127.895 129.549a3.436 3.436 0 016.459 1.78" data-name="Path 480"></path>
            <path d="M0 0L5.047 1.775" data-name="Line 29" transform="translate(115.458 122.938)"></path>
            <path d="M112.242 105.462a29.942 29.942 0 018.109 5.872" data-name="Path 481"></path>
          </g>
          <g data-name="Group 247">
            <path strokeMiterlimit="10" d="M141.356 87.162a7.987 7.987 0 019.226 4.61" data-name="Path 482"></path>
            <path strokeMiterlimit="10" d="M150.984 120.078a8.017 8.017 0 01-3.344 6.844 8.374 8.374 0 01-5.59 1.72" data-name="Path 483"></path>
            <path strokeMiterlimit="10" d="M142.19 119.483c-.9-1.667-4.019-2.295-5.683-1.4a3.789 3.789 0 00-2.146 3.176" data-name="Path 484"></path>
            <path strokeLinejoin="round" d="M160.86 94.278s12.862 11.184 1.119 22.648c0 0 3.355 15.1-9.507 15.937" data-name="Path 485"></path>
            <path strokeMiterlimit="10" d="M134.765 110.069s9.087 2.446 12.919-4.493" data-name="Path 486"></path>
            <path strokeMiterlimit="10" d="M145.518 108.624s6.018 4.856 10.907-.5" data-name="Path 487"></path>
            <path strokeMiterlimit="10" d="M144.778 86.784a8.808 8.808 0 1115.864 7.243" data-name="Path 488"></path>
            <path strokeMiterlimit="10" d="M134.52 94.306s4.943 4.168 8.112 4.168" data-name="Path 489"></path>
          </g>
          <path strokeLinejoin="round" d="M160.86 94.278a28.239 28.239 0 00-2.888-2.129" data-name="Path 490"></path>
        </g>
      </>
    )
  },
  atom: {
    viewBox: '0 0 67.319 70.712',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 249" transform="translate(-243.859 -72.016)">
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M257.807 106.754c-7.61-6.71-11.561-13.146-9.506-16.673 1.7-2.92 7.168-3.242 14.443-1.39"
            data-name="Path 491"
          ></path>
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M307.879 120.471a5.194 5.194 0 01-.2 4.194c-2.754 4.727-15.37 2.652-29.549-4.446"
            data-name="Path 492"
          ></path>
          <path strokeLinecap="round" strokeMiterlimit="10" d="M283.995 97.869a81.8 81.8 0 0118.734 14.587" data-name="Path 493"></path>
          <path
            strokeMiterlimit="10"
            d="M252.048 113.362c4.357-5.077 11.59-10.8 20.422-15.779C289 88.268 304.872 85.1 307.918 90.5s-7.884 17.342-24.414 26.657-32.4 12.484-35.448 7.077a4.574 4.574 0 01-.418-3.091"
            data-name="Path 494"
          ></path>
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M274.289 74.837a5.082 5.082 0 013.6-1.821c3.464-.009 6.576 4.778 8.658 12.309"
            data-name="Path 495"
          ></path>
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M286.568 129.754c-2.041 7.323-5.081 11.965-8.486 11.974-6.208.018-11.28-15.35-11.332-34.327-.025-9.407 1.188-17.935 3.175-24.145"
            data-name="Path 496"
          ></path>
          <path strokeLinejoin="round" d="M276.12 78.962a4.486 4.486 0 11-4.486-4.487 4.485 4.485 0 014.486 4.487z" data-name="Path 497"></path>
          <path strokeLinejoin="round" d="M253.831 117.114a4.486 4.486 0 11-4.485-4.486 4.485 4.485 0 014.485 4.486z" data-name="Path 498"></path>
          <path strokeLinejoin="round" d="M310.178 116.351a4.487 4.487 0 11-4.486-4.487 4.485 4.485 0 014.486 4.487z" data-name="Path 499"></path>
          <path
            strokeMiterlimit="10"
            d="M277.982 109.6a2.225 2.225 0 111.1-4.162 2.222 2.222 0 01.841 3.03 2.229 2.229 0 01-1.941 1.132z"
            data-name="Path 500"
          ></path>
        </g>
      </>
    )
  },
  calculator: {
    viewBox: '0 0 49.681 68.232',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 250" transform="translate(-398.121 -73.007)">
          <rect
            width="47.681"
            height="66.232"
            strokeLinejoin="round"
            data-name="Rectangle 34"
            rx="5.137"
            transform="translate(399.121 74.007)"
          ></rect>
          <path strokeMiterlimit="10" d="M0 0L47.259 0" data-name="Line 30" transform="translate(399.447 95.841)"></path>
          <path strokeMiterlimit="10" d="M0 0L0 43.918" data-name="Line 31" transform="translate(415.043 96.07)"></path>
          <path strokeMiterlimit="10" d="M0 0L0 43.907" data-name="Line 32" transform="translate(430.962 96.025)"></path>
          <path strokeMiterlimit="10" d="M0 0L0 7.949" data-name="Line 33" transform="translate(428.78 81.175)"></path>
          <path strokeMiterlimit="10" d="M0 0L0 7.949" data-name="Line 34" transform="translate(437.639 81.175)"></path>
          <path strokeMiterlimit="10" d="M0 0L47.259 0" data-name="Line 35" transform="translate(399.447 110.609)"></path>
          <path strokeMiterlimit="10" d="M0 0L31.222 0" data-name="Line 36" transform="translate(399.447 125.377)"></path>
        </g>
      </>
    )
  },
  document: {
    viewBox: '0 0 54.082 71.441',
    path: (
      <>
        <g data-name="Group 252" transform="translate(-540.169 -72.016)">
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 251">
            <path
              d="M588.443 73.016h-33.855l-13.419 11.647v52.986a4.822 4.822 0 004.808 4.808h42.466a4.821 4.821 0 004.808-4.808V77.824a4.821 4.821 0 00-4.808-4.808z"
              data-name="Path 501"
            ></path>
            <path d="M556.753 73.333v15.408h-9.03" data-name="Path 502"></path>
          </g>
        </g>
      </>
    )
  },
  storefront: {
    viewBox: '0 0 74 66.834',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 256" transform="translate(-674.366 -75.075)">
          <path strokeLinecap="round" strokeMiterlimit="10" d="M0 13.208L13.208 0" data-name="Line 37" transform="translate(719.551 116.84)"></path>
          <path strokeLinecap="round" strokeMiterlimit="10" d="M0 5.451L5.481 0" data-name="Line 38" transform="translate(728.192 124.604)"></path>
          <g strokeMiterlimit="10" data-name="Group 253">
            <path d="M0 32.625L0 0" data-name="Line 39" transform="translate(681.356 108.293)"></path>
            <path d="M0 0L0 32.625" data-name="Line 40" transform="translate(741.375 108.293)"></path>
            <path d="M0 0L0 32.533" data-name="Line 41" transform="translate(700.254 108.293)"></path>
          </g>
          <path strokeLinecap="round" strokeMiterlimit="10" d="M0 0L0 4.402" data-name="Line 42" transform="translate(693.739 118.841)"></path>
          <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 254">
            <path d="M704.43 96.626a6.759 6.759 0 11-13.518 0" data-name="Path 503"></path>
            <path d="M718.018 96.626a6.794 6.794 0 01-13.588 0" data-name="Path 504"></path>
            <path d="M731.677 96.626a6.83 6.83 0 01-13.659 0" data-name="Path 505"></path>
            <path d="M60.177 0L0 0" data-name="Line 43" transform="translate(684.871 90.697)"></path>
          </g>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M731.677 96.626a6.83 6.83 0 0013.659 0v-5.9l-8.284-14.575h-51.2l-8.455 14.574v5.9a6.759 6.759 0 1013.518 0"
            data-name="Path 506"
          ></path>
          <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 255">
            <path d="M0 8.146L0.513 0" data-name="Line 44" transform="translate(705.385 76.278)"></path>
            <path d="M0 8.146L1.924 0" data-name="Line 45" transform="translate(693.52 76.278)"></path>
            <path d="M0.513 8.146L0 0" data-name="Line 46" transform="translate(716.545 76.278)"></path>
            <path d="M1.924 8.146L0 0" data-name="Line 47" transform="translate(727 76.278)"></path>
          </g>
          <path strokeLinecap="round" strokeLinejoin="round" d="M0 0L72 0" data-name="Line 48" transform="translate(675.366 140.909)"></path>
        </g>
      </>
    )
  },
  cash: {
    viewBox: '0 0 68.642 42.634',
    path: (
      <>
        <g data-name="Group 262" transform="translate(-820.637 -87.857)">
          <g data-name="Group 261">
            <g data-name="Group 258">
              <g data-name="Group 257">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M837.394 112.544a.815.815 0 11-.814-.816.813.813 0 01.814.816z"
                  data-name="Path 507"
                ></path>
              </g>
            </g>
            <g data-name="Group 260">
              <g data-name="Group 259">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M867.246 112.544a.815.815 0 11-.814-.816.813.813 0 01.814.816z"
                  data-name="Path 508"
                ></path>
              </g>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M0 0H59.737V33.895H0z"
            data-name="Rectangle 35"
            transform="translate(821.637 95.597)"
          ></path>
          <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M827.964 88.857h60.314V123.9" data-name="Path 509"></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M875.1 106.178a4.278 4.278 0 01-4.278-4.278h-38.634a4.279 4.279 0 01-4.278 4.278v12.732a4.278 4.278 0 014.278 4.278h38.634a4.278 4.278 0 014.278-4.278z"
            data-name="Path 510"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M856.754 112.544a5.263 5.263 0 11-5.249-5.647 5.46 5.46 0 015.249 5.647z"
            data-name="Path 511"
          ></path>
        </g>
      </>
    )
  },
  'private-content': {
    viewBox: '0 0 69.697 51.723',
    path: (
      <>
        <g data-name="Group 274" transform="translate(-963.581 -81.226)">
          <g data-name="Group 265">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M990.684 109.472h15.49a1.374 1.374 0 011.374 1.374v12.114a1.374 1.374 0 01-1.374 1.374h-15.491a1.373 1.373 0 01-1.373-1.373v-12.115a1.374 1.374 0 011.374-1.374z"
              data-name="Rectangle 36"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M0 0L0 4.33"
              data-name="Line 49"
              transform="translate(998.429 115.545)"
            ></path>
            <g data-name="Group 264">
              <g data-name="Group 263">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M999.248 115.358a.818.818 0 11-.818-.819.817.817 0 01.818.819z"
                  data-name="Path 512"
                ></path>
              </g>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M1003.99 109.656v-2.738a4.216 4.216 0 00-4.2-4.2h-2.714a4.217 4.217 0 00-4.2 4.2v2.738"
              data-name="Path 513"
            ></path>
          </g>
          <g data-name="Group 273">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M0 0L58.216 0"
              data-name="Line 50"
              transform="translate(969.322 94.695)"
            ></path>
            <g data-name="Group 272">
              <g data-name="Group 267">
                <g data-name="Group 266">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M974.142 88.55a.818.818 0 11-.817-.819.815.815 0 01.817.819z"
                    data-name="Path 514"
                  ></path>
                </g>
              </g>
              <g data-name="Group 269">
                <g data-name="Group 268">
                  <circle
                    cx="0.819"
                    cy="0.819"
                    r="0.819"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    data-name="Ellipse 6"
                    transform="translate(980.335 87.731)"
                  ></circle>
                </g>
              </g>
              <g data-name="Group 271">
                <g data-name="Group 270">
                  <circle
                    cx="0.819"
                    cy="0.819"
                    r="0.819"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    data-name="Ellipse 7"
                    transform="translate(988.166 87.731)"
                  ></circle>
                </g>
              </g>
            </g>
            <rect
              width="67.697"
              height="49.723"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              data-name="Rectangle 37"
              rx="3.756"
              transform="translate(964.581 82.226)"
            ></rect>
          </g>
        </g>
      </>
    )
  },
  phone: {
    viewBox: '0 0 68.104 68.052',
    path: (
      <>
        <g data-name="Group 276" transform="translate(-389.736 -216.053)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M403.589 236.059l-9.089-13.645c-.594.533-.967.882-.967.882-3.415 3.04-2.655 5.7-2.655 5.7 2.306 16.256 19.418 31.918 20.726 33.282 1.766 1.637 17.049 18.4 33.308 20.688 0 0 2.657.757 5.7-2.662l.945-1.04c1.169-1.544 5.184-6.736 5.22-7.6a3.208 3.208 0 00-1.616-3.129l-11.966-7.968a4.374 4.374 0 00-5.033-.283l-7.215 3.991a141.569 141.569 0 01-21.357-21.331l3.985-7.217a4.377 4.377 0 00-.288-5.033l-7.987-11.962a3.217 3.217 0 00-3.132-1.613c-.881.04-2.458 1.055-4.026 2.252m53.413 59.891l-13.683-9.172"
            data-name="Path 517"
          ></path>
        </g>
      </>
    )
  },
  email: {
    viewBox: '0 0 72.719 56.169',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 277"
          transform="translate(-241.306 -362.992)"
        >
          <path
            d="M302.6 389.926v24.947a3.3 3.3 0 01-3.3 3.288h-53.7a3.3 3.3 0 01-3.3-3.288v-37.192a3.307 3.307 0 013.3-3.3h41.265"
            data-name="Path 518"
          ></path>
          <path d="M248.947 379.786L272.541 398l16.731-13.131m-2.2 15.367l13.618 16.3m-42.857-16.3l-13.62 16.3" data-name="Path 519"></path>
          <circle cx="10.6" cy="10.6" r="10.6" data-name="Ellipse 8" transform="rotate(-89.785 339.192 46.179)"></circle>
          <path d="M299.01 372.8l4-3.028v9.676" data-name="Path 520"></path>
        </g>
      </>
    )
  },
  speaking: {
    viewBox: '0 0 74.055 68.922',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" data-name="Group 278" transform="translate(-385.251 -363.668)">
          <path strokeLinejoin="round" d="M449.311 386.389h9v-21.721h-30.1v21.721h14.414l-10.1 9.138" data-name="Path 521"></path>
          <path
            strokeLinejoin="round"
            d="M400.9 395.515c.994 4.527 4.018 8.282 7.3 8.282 4.366 0 7.685-6.135 7.685-12.467 0 0 .241-4.167-1.881-6.884 0 0-4.569 5.519-18.929 6.325m26.565 10.783v-11.142c-.2-15.21-13.4-14.189-13.4-14.189h-.283s-13.207-1.021-13.4 14.189v11.142"
            data-name="Path 522"
          ></path>
          <path
            strokeMiterlimit="10"
            d="M417.159 408.64l5.018 1.085s6.026 1.187 6.826 6.249l.889 15.561m-37.96-21.106a7.539 7.539 0 00-4.738 5.545l-.888 15.561"
            data-name="Path 523"
          ></path>
          <path
            strokeLinejoin="round"
            d="M417.137 414.757l4.485-.236-6.9-8.093-6.622 18.424-6.623-18.424-6.9 8.093 4.485.236"
            data-name="Path 524"
          ></path>
        </g>
      </>
    )
  },
  laptop: {
    viewBox: '0 0 75.425 48.989',
    path: (
      <>
        <g data-name="Group 279" transform="translate(-240.813 -225.232)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M241.813 267.47s1.268 5.751 5.474 5.751h62.477c4.206 0 5.474-5.751 5.474-5.751zm6.936-4.789v-32.1a4.359 4.359 0 014.345-4.346h50.858a4.36 4.36 0 014.349 4.346v32.1"
            data-name="Path 525"
          ></path>
        </g>
      </>
    )
  },
  'video-call': {
    viewBox: '0 0 70.822 57.975',
    path: (
      <>
        <g data-name="Group 282" transform="translate(-98.669 -363.095)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M0 0L17.18 0"
            data-name="Line 51"
            transform="translate(143.047 370.564)"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M0 0L14.613 0"
            data-name="Line 52"
            transform="translate(145.613 376.338)"
          ></path>
          <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M161.988 387.272v22.675" data-name="Path 526"></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M106.17 409.947v-30.089a4.085 4.085 0 014.072-4.075h12.226"
            data-name="Path 527"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M163.36 420.07c3.944 0 5.131-5.634 5.131-5.634H99.669s1.188 5.634 5.13 5.634z"
            data-name="Path 528"
          ></path>
          <g data-name="Group 281">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 280">
              <path
                d="M134.123 373.251c-7.218 0-7.618 4.365-7.115 9.672s3.848 9.668 7.115 9.668 6.609-4.352 7.115-9.668.103-9.672-7.115-9.672z"
                data-name="Path 529"
              ></path>
              <path strokeLinecap="round" d="M141.162 381.5a11.648 11.648 0 01-4.946-2.725s-.77 1.706-4.673 2.338" data-name="Path 530"></path>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M136.794 369.135v-5.04h29.188V382.8h-20.4"
            data-name="Path 531"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M148.243 409.947v-7.914c0-4.332-5.253-5.645-5.253-5.645l-2.658-.807-6.252 7.8-6.253-7.8-2.656.807s-5.252 1.313-5.252 5.645v7.914"
            data-name="Path 532"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.617 0L0 5.524"
            data-name="Line 53"
            transform="translate(147.746 382.847)"
          ></path>
        </g>
      </>
    )
  },
  package: {
    viewBox: '0 0 71.181 71.695',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 283" transform="translate(-532.313 -216.09)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M590.04 236.975l12.143-5.017v39.86l-34.432 14.654V246.3l6.1-2.583"
            data-name="Path 533"
          ></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M567.751 246.3l-34.117-14.345v39.86l34.117 14.654" data-name="Path 534"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M533.633 231.957l33.34-14.867 35.21 14.867" data-name="Path 535"></path>
          <path strokeMiterlimit="10" d="M547.14 226.21l34.144 14.418v11.535l8.453-3.57v-11.481L555.373 222.6" data-name="Path 536"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M0 9.462L0 0" data-name="Line 54" transform="translate(560.249 266.511)"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M0 9.463L0 0" data-name="Line 55" transform="translate(554.062 263.964)"></path>
        </g>
      </>
    )
  },
  wallet: {
    viewBox: '0 0 71.579 71.05',
    path: (
      <>
        <g data-name="Group 287" transform="translate(-675.932 -216.038)">
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M696.961 228.99l27.686-11.65 5.283 11.876"
            data-name="Path 537"
          ></path>
          <g data-name="Group 284">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M741.128 271.335v8.358a6.414 6.414 0 01-6.4 6.4h-51.4a6.414 6.414 0 01-6.4-6.4v-38.159a6.414 6.414 0 016.4-6.4h51.4a6.415 6.415 0 016.4 6.4v8.107"
              data-name="Path 538"
            ></path>
          </g>
          <g data-name="Group 286">
            <g data-name="Group 285">
              <path
                fill="#2a3643"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M722.433 260.613a1 1 0 11-1-1 .993.993 0 011 1z"
                data-name="Path 539"
              ></path>
            </g>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M718.291 271.059a6.414 6.414 0 01-6.4-6.395v-8.1a6.415 6.415 0 016.4-6.4h28.22v20.892z"
            data-name="Path 540"
          ></path>
        </g>
      </>
    )
  },
  'person-checklist': {
    viewBox: '0 0 58.156 72.296',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 294" transform="translate(-827.343 -215.548)">
          <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 291">
            <g data-name="Group 288">
              <path d="M881.118 233.184h-14.133v-14.7h7.983" data-name="Path 541"></path>
              <path d="M872.043 224.027l3.535 3.927 8.518-11" data-name="Path 542"></path>
            </g>
            <g data-name="Group 289">
              <path d="M881.118 259.726h-14.133v-14.7h7.983" data-name="Path 543"></path>
              <path d="M872.043 250.571l3.535 3.927 8.518-11" data-name="Path 544"></path>
            </g>
            <g data-name="Group 290">
              <path d="M881.118 286.268h-14.133v-14.694h7.983" data-name="Path 545"></path>
              <path d="M872.043 277.113l3.535 3.927 8.518-11" data-name="Path 546"></path>
            </g>
          </g>
          <g strokeMiterlimit="10" data-name="Group 293">
            <path d="M848.061 224.194a5.995 5.995 0 11-5.992-6 5.994 5.994 0 015.992 6z" data-name="Path 547"></path>
            <path
              d="M834.229 264.386c-4.38 0-5.886-3.582-5.886-7.962v-12.709a7.984 7.984 0 017.961-7.962h11.527a7.986 7.986 0 017.963 7.962v12.709c0 4.38-1.509 7.962-5.888 7.962"
              data-name="Path 548"
            ></path>
            <g data-name="Group 292">
              <path d="M0 0L0 41.721" data-name="Line 56" transform="translate(849.977 246.123)"></path>
              <path d="M0 0L0 23.11" data-name="Line 57" transform="translate(842.067 264.734)"></path>
              <path d="M0 0L0 41.721" data-name="Line 58" transform="translate(834.159 246.123)"></path>
            </g>
          </g>
        </g>
      </>
    )
  },
  'user-swap': {
    viewBox: '0 0 70.458 60.21',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 301" transform="translate(-963.394 -223.336)">
          <g data-name="Group 297">
            <g data-name="Group 295">
              <path
                strokeLinejoin="round"
                d="M964.394 260.917v-7.391c0-5.214 3.771-7.137 8.627-7.137l5.965 6.57 5.534-6.57c4.856 0 9.047 1.923 9.047 7.137v7.391"
                data-name="Path 549"
              ></path>
              <path strokeMiterlimit="10" d="M985.729 233.727a6.749 6.749 0 11-13.5 0v-2.539a6.749 6.749 0 1113.5 0z" data-name="Path 550"></path>
            </g>
            <g data-name="Group 296">
              <path
                strokeLinejoin="round"
                d="M1003.678 260.917v-7.392c0-5.213 3.77-7.136 8.624-7.136l5.966 6.569 5.537-6.569c4.854 0 9.047 1.923 9.047 7.136v7.392"
                data-name="Path 551"
              ></path>
              <path strokeMiterlimit="10" d="M1025.012 233.726a6.749 6.749 0 11-13.5 0v-2.539a6.749 6.749 0 1113.5 0z" data-name="Path 552"></path>
            </g>
          </g>
          <g data-name="Group 300">
            <path strokeMiterlimit="10" d="M0 0L4.346 0" data-name="Line 59" transform="translate(992.494 282.546)"></path>
            <path strokeMiterlimit="10" d="M0 0L4.346 0" data-name="Line 60" transform="translate(1000.446 282.546)"></path>
            <g data-name="Group 298">
              <path strokeMiterlimit="10" d="M988.854 282.546h-3.742a6.177 6.177 0 01-6.172-6.156v-15.563" data-name="Path 553"></path>
              <path strokeLinejoin="round" d="M985.9 267.428l-6.962-6.929-6.964 6.929" data-name="Path 554"></path>
            </g>
            <g data-name="Group 299">
              <path strokeMiterlimit="10" d="M1008.393 282.546h3.741a6.177 6.177 0 006.173-6.156v-15.563" data-name="Path 555"></path>
              <path strokeLinejoin="round" d="M1011.349 267.428l6.962-6.929 6.964 6.929" data-name="Path 556"></path>
            </g>
          </g>
        </g>
      </>
    )
  },
  'person-time': {
    viewBox: '0 0 50.665 68.406',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 308" transform="translate(-686.09 -362.297)">
          <g data-name="Group 307">
            <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 305">
              <path d="M0 0L0 4.419" data-name="Line 61" transform="translate(718.913 396.451)"></path>
              <path d="M0 0L0 4.419" data-name="Line 62" transform="translate(718.913 424.788)"></path>
            </g>
            <g strokeLinecap="round" strokeLinejoin="round" data-name="Group 306">
              <path d="M4.42 0L0 0" data-name="Line 63" transform="translate(730.847 412.84)"></path>
              <path d="M4.42 0L0 0" data-name="Line 64" transform="translate(702.495 412.84)"></path>
            </g>
            <path strokeMiterlimit="10" d="M713.8 409.321l5.1 5.015 7.712-7.833" data-name="Path 561"></path>
          </g>
          <path strokeMiterlimit="10" d="M704.141 369.053a5.754 5.754 0 11-5.753-5.756 5.753 5.753 0 015.753 5.756z" data-name="Path 562"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M708.8 392.836l-.865-8.573a4.6 4.6 0 00-4.468-4.042h-10.161a4.6 4.6 0 00-4.469 4.042L687.11 401.4c-.222 2.222 2.3 3.989 4.416 4.75l.547 22.522"
            data-name="Path 563"
          ></path>
          <path
            strokeLinejoin="round"
            d="M735.755 412.83a16.874 16.874 0 11-16.875-16.876 16.874 16.874 0 0116.875 16.876z"
            data-name="Path 564"
          ></path>
        </g>
      </>
    )
  },
  'safety-verified': {
    viewBox: '0 0 54.556 69.091',
    path: (
      <>
        <g data-name="Group 311" transform="translate(-828.134 -361.683)">
          <g data-name="Group 309">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M851.493 367.814c-3.658 3.086-10.4 6.512-22.3 6.512v28.551s-1.755 13.719 26.223 26.9c27.98-13.178 26.224-26.9 26.224-26.9v-28.551c-21.661 0-26.224-11.342-26.224-11.342"
              data-name="Path 565"
            ></path>
          </g>
          <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 310">
            <path strokeLinecap="round" d="M847.438 391.452l8.248 11.422 15.2-18.174" data-name="Path 566"></path>
            <path d="M870.688 392.857a15.675 15.675 0 11-5.795-8.963" data-name="Path 567"></path>
          </g>
        </g>
      </>
    )
  },
  success: {
    viewBox: '0 0 67.205 65.878',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 312"
          transform="translate(-964.494 -363.668)"
        >
          <path d="M983.2 390.56l13.8 18.808 33.293-37.864" data-name="Path 568"></path>
          <path d="M1028.783 390.466a31.933 31.933 0 11-14.661-21.1" data-name="Path 569"></path>
        </g>
      </>
    )
  },
  'email-confirmed': {
    viewBox: '0 0 53.36 70.038',
    path: (
      <>
        <g data-name="Group 317" transform="translate(-107.443 -504.981)">
          <g data-name="Group 315">
            <g data-name="Group 313">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M151.53 566.344s-15.209-11.786-15.871-12.334a2.5 2.5 0 00-2.807.1c-.978.754-16.136 12.237-16.136 12.237"
                data-name="Path 571"
              ></path>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M138.013 555.508l21.79-17.364v32.991a2.92 2.92 0 01-2.929 2.884h-45.5a2.92 2.92 0 01-2.93-2.884v-32.991l21.79 17.364"
              data-name="Path 572"
            ></path>
            <g data-name="Group 314">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M154.694 536.58v-30.6h-41.142v30.6"
                data-name="Path 573"
              ></path>
            </g>
          </g>
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 316">
            <path d="M126.384 525.877l5.228 7.241 9.64-11.521" data-name="Path 574"></path>
            <path d="M127.17 513.889a14.637 14.637 0 11-4.646 3.96" data-name="Path 575"></path>
          </g>
        </g>
      </>
    )
  },
  'calendar-confirmed': {
    viewBox: '0 0 69.002 64.659',
    path: (
      <>
        <g data-name="Group 321" transform="translate(-245.019 -507.253)">
          <g data-name="Group 319">
            <g fill="none" stroke="currentColor" strokeWidth="2" data-name="Group 318">
              <path strokeLinejoin="round" d="M0 0L44.755 0" data-name="Line 65" transform="translate(250.747 524.213)"></path>
              <path
                strokeLinejoin="round"
                d="M279.4 562.446h-30.251a3.154 3.154 0 01-3.13-3.146v-43.06a3.139 3.139 0 013.13-3.128h8.61"
                data-name="Path 576"
              ></path>
              <path strokeLinejoin="round" d="M291.336 513.112h5.764a3.139 3.139 0 013.129 3.128v20.278" data-name="Path 577"></path>
              <path strokeLinejoin="round" d="M0 0L7.499 0" data-name="Line 66" transform="translate(277.642 513.112)"></path>
              <path strokeLinejoin="round" d="M0 0L7.498 0" data-name="Line 67" transform="translate(263.95 513.112)"></path>
              <path strokeLinecap="round" strokeMiterlimit="10" d="M0 0L0 10.644" data-name="Line 68" transform="translate(257.974 508.253)"></path>
              <path strokeLinecap="round" strokeMiterlimit="10" d="M0 0L0 10.644" data-name="Line 69" transform="translate(285.357 508.253)"></path>
              <path strokeLinecap="round" strokeMiterlimit="10" d="M0 0L0 10.644" data-name="Line 70" transform="translate(271.665 508.253)"></path>
              <path strokeLinejoin="round" d="M0 0L33.666 0" data-name="Line 71" transform="translate(254.737 538.358)"></path>
              <path strokeLinejoin="round" d="M0 0L25.333 0" data-name="Line 72" transform="translate(254.737 548.605)"></path>
              <path strokeLinejoin="round" d="M0 26.438L0 0" data-name="Line 73" transform="translate(273.124 530.262)"></path>
              <path strokeLinejoin="round" d="M0 26.438L0 0" data-name="Line 74" transform="translate(262.877 530.262)"></path>
              <path strokeLinejoin="round" d="M0 12.719L0 0" data-name="Line 75" transform="translate(283.371 530.262)"></path>
            </g>
          </g>
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 320">
            <path d="M290.379 555.2l5.3 7.334 9.762-11.669" data-name="Path 578"></path>
            <path d="M291.164 543.061a14.819 14.819 0 11-4.706 4.01" data-name="Path 579"></path>
          </g>
        </g>
      </>
    )
  },
  'man-confirmed': {
    viewBox: '0 0 70.72 64.102',
    path: (
      <>
        <g data-name="Group 328" transform="translate(-387.083 -507.107)">
          <g data-name="Group 326">
            <g data-name="Group 325">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M402.9 523.015s10.387 1.465 13.631-6.468c0 0 3.476 6.419 8.555 6.419"
                data-name="Path 580"
              ></path>
              <g data-name="Group 324">
                <g data-name="Group 322">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M403.145 542.371c.005 1.91 0 6.027 0 6.027s.434 2.576-14.846 6.464"
                    data-name="Path 581"
                  ></path>
                </g>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 323">
                  <path d="M418.846 542.371c-.008 1.91 0 6.027 0 6.027s-.169.993 3.365 2.678" data-name="Path 582"></path>
                  <path
                    d="M415.729 543.318a7.835 7.835 0 003.129-1.424c3.506-2.49 5.679-10.3 6.334-15.768.965-8.059-.109-17.7-14.157-18.019h-.081c-14.047.32-15.121 9.96-14.154 18.019.654 5.471 2.828 13.278 6.332 15.768a7.844 7.844 0 003.129 1.424"
                    data-name="Path 583"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 327">
            <path d="M433.813 554.265l5.374 7.443 9.908-11.842" data-name="Path 584"></path>
            <path d="M434.621 541.943a15.041 15.041 0 11-4.776 4.07" data-name="Path 585"></path>
          </g>
        </g>
      </>
    )
  },
  'woman-confirmed': {
    viewBox: '0 0 70.318 66.018',
    path: (
      <>
        <g data-name="Group 340" transform="translate(-532.822 -507.108)">
          <g data-name="Group 333">
            <g data-name="Group 332">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M575.825 540.737v-11.72c0-21.561-19.092-20.906-19.962-20.906s-19.958-.763-19.958 20.906v13.906"
                data-name="Path 586"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M569.073 525.681h-7.56l-3.3-6.6-3.882 6.6h-11.807"
                data-name="Path 587"
              ></path>
              <g data-name="Group 330">
                <g data-name="Group 329">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M548.107 542.882c.006 1.934 0 7.026 0 7.026s.441 2.609-15.038 6.548"
                    data-name="Path 588"
                  ></path>
                </g>
              </g>
              <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 331">
                <path
                  d="M545.011 525.795a17.639 17.639 0 00-.375 4.237c0 6.068 2.384 12.8 6.262 15.707a7.789 7.789 0 001.079.59"
                  data-name="Path 589"
                ></path>
                <path
                  d="M566.719 525.795a17.585 17.585 0 01.377 4.237c0 6.068-2.384 12.8-6.265 15.707a7.8 7.8 0 01-1.076.59"
                  data-name="Path 590"
                ></path>
              </g>
            </g>
          </g>
          <g data-name="Group 339">
            <g data-name="Group 337">
              <g data-name="Group 336">
                <g data-name="Group 335">
                  <g data-name="Group 334">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M563.685 543.924c-.008 1.936 0 6.106 0 6.106s-.171 1.006 3.409 2.713"
                      data-name="Path 591"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 338">
              <path d="M578.847 555.974l5.445 7.541 10.037-12" data-name="Path 592"></path>
              <path d="M579.667 543.49a15.238 15.238 0 11-4.839 4.124" data-name="Path 593"></path>
            </g>
          </g>
        </g>
      </>
    )
  },
  'sms-confirmed': {
    viewBox: '0 0 55.585 70.404',
    path: (
      <>
        <g data-name="Group 346" transform="translate(-689.243 -504.507)">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 341">
            <path d="M719.243 532.768l5.746 7.96 10.6-12.664" data-name="Path 594"></path>
            <path d="M720.107 519.59a16.089 16.089 0 11-5.107 4.353" data-name="Path 595"></path>
          </g>
          <g data-name="Group 345">
            <g data-name="Group 344">
              <g data-name="Group 343">
                <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 342">
                  <path
                    d="M728.067 554.466v16.25a3.191 3.191 0 01-3.1 3.2h-31.629a3.19 3.19 0 01-3.1-3.2V508.6a3.1 3.1 0 013.1-3.1h31.633a3.1 3.1 0 013.1 3.1v4.349"
                    data-name="Path 596"
                  ></path>
                  <path d="M0 0L28.619 0" data-name="Line 76" transform="translate(694.84 560.411)"></path>
                  <path strokeLinecap="round" d="M0 0L5.143 0" data-name="Line 77" transform="translate(706.583 566.967)"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </>
    )
  },
  'laptop-confirmed': {
    viewBox: '0 0 74.89 48.647',
    path: (
      <>
        <g data-name="Group 350" transform="translate(-817.403 -514.034)">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="Group 347">
            <path d="M847.109 534.583l5.228 7.241 9.641-11.521" data-name="Path 597"></path>
            <path d="M847.9 522.594a14.635 14.635 0 11-4.647 3.96" data-name="Path 598"></path>
          </g>
          <g data-name="Group 349">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" data-name="Group 348">
              <path d="M825.288 551.218v-31.869a4.328 4.328 0 014.314-4.315h50.487a4.328 4.328 0 014.317 4.315v31.869" data-name="Path 599"></path>
              <path d="M818.4 555.972s1.258 5.709 5.434 5.709h62.022c4.176 0 5.434-5.709 5.434-5.709z" data-name="Path 600"></path>
            </g>
          </g>
        </g>
      </>
    )
  },
  bullseye: {
    viewBox: '0 0 70.803 70.803',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 351" transform="translate(-98.007 -649.661)">
          <path d="M134.717 689.705a5.952 5.952 0 11-5.952-5.951 5.952 5.952 0 015.952 5.951z" data-name="Path 603"></path>
          <path d="M146.62 689.705a17.855 17.855 0 11-17.855-17.854 17.855 17.855 0 0117.855 17.854z" data-name="Path 604"></path>
          <circle cx="29.758" cy="29.758" r="29.758" data-name="Ellipse 9" transform="translate(99.007 659.947)"></circle>
          <path d="M132.974 685.5l25.244-25.245z" data-name="Path 605"></path>
          <path d="M0 0H12.788V12.788H0z" data-name="Rectangle 38" transform="translate(155.021 650.661)"></path>
        </g>
      </>
    )
  },
  'sms-conversation': {
    viewBox: '0 0 72.071 62.649',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 352" transform="translate(-386.812 -651.651)">
          <path d="M439.522 701.17h0z" data-name="Path 608"></path>
          <path d="M418.016 707.235h0z" data-name="Path 609"></path>
          <path d="M418.016 707.235h0z" data-name="Path 610"></path>
          <path d="M439.526 664.775h0z" data-name="Path 611"></path>
          <path
            d="M439.526 673.7v-18.1a2.949 2.949 0 00-2.949-2.949h-27.459a2.949 2.949 0 00-2.949 2.949v0a2.949 2.949 0 012.949-2.949h27.459a2.949 2.949 0 012.949 2.949z"
            data-name="Path 612"
          ></path>
          <path
            d="M406.169 691.9v18.455a2.95 2.95 0 002.949 2.949h27.459a2.949 2.949 0 002.949-2.949v0a2.949 2.949 0 01-2.949 2.949h-27.459a2.95 2.95 0 01-2.949-2.949z"
            data-name="Path 613"
          ></path>
          <path d="M419.815 658.656h0z" data-name="Path 614"></path>
          <path d="M419.225 685.831h-24.381v-3.29h-7.032v-.141l7.032-4.89v-3.81h24.382z" data-name="Path 615"></path>
          <path d="M426.47 679.95h24.382v3.29h7.032v.139l-7.032 4.89v3.811H426.47z" data-name="Path 616"></path>
        </g>
      </>
    )
  },
  iot: {
    viewBox: '0 0 73.244 63.268',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 353" transform="translate(-530.327 -652.939)">
          <path
            d="M549.4 678.267a19.24 19.24 0 01.061-1.987 17.792 17.792 0 0115.339-16.1 18.144 18.144 0 015.421.127 18.144 18.144 0 00-5.421-.127 17.792 17.792 0 00-15.339 16.1 19.24 19.24 0 00-.061 1.987z"
            data-name="Path 617"
          ></path>
          <path
            d="M584.857 677.859a17.447 17.447 0 01-5.173 12.542 13.241 13.241 0 00-4.044 9.415v3.068h-17.058v-3.525a11.82 11.82 0 00-1.457-5.66 11.82 11.82 0 011.457 5.66v3.525h17.058v-3.068a13.241 13.241 0 014.044-9.415 17.447 17.447 0 005.173-12.542z"
            data-name="Path 618"
          ></path>
          <path d="M558.582 702.884h17.058v6.956l-4.763 2.827-1.441 2.541h-4.643l-1.441-2.541-4.769-2.827z" data-name="Path 619"></path>
          <path d="M573.1 677.859a5.973 5.973 0 11-5.974-5.973 5.974 5.974 0 015.974 5.973z" data-name="Path 620"></path>
          <path d="M557.9 677.859h0z" data-name="Path 621"></path>
          <path d="M573.494 677.859h0z" data-name="Path 622"></path>
          <path d="M560.6 684.381l2.019-2.019z" data-name="Path 623"></path>
          <path d="M571.629 673.356l2.019-2.019z" data-name="Path 624"></path>
          <path d="M567.126 687.082v0z" data-name="Path 625"></path>
          <path d="M567.126 671.491v0z" data-name="Path 626"></path>
          <path d="M573.648 684.381l-2.019-2.019z" data-name="Path 627"></path>
          <path d="M562.624 673.356l-2.019-2.019z" data-name="Path 628"></path>
          <path d="M0 0H21.599V15.428H0z" data-name="Rectangle 39" transform="translate(531.327 683.198)"></path>
          <path d="M531.548 696.868l7.349-5.956 6.946 7.473-6.946-7.473z" data-name="Path 629"></path>
          <path d="M552.926 696.868l-6.3-4.957-3.767 3.267 3.767-3.267z" data-name="Path 630"></path>
          <path d="M575.64 653.939v12.343h5.923v7.155h.142l4.976-7.155h13.553v-12.343z" data-name="Path 631"></path>
          <path d="M594.2 699.23a4.628 4.628 0 11-4.628-4.628 4.628 4.628 0 014.628 4.628z" data-name="Path 632"></path>
          <path d="M546.265 657.747a3.086 3.086 0 11-3.086-3.085 3.086 3.086 0 013.086 3.085z" data-name="Path 633"></path>
          <path d="M593.478 683.832v-9.257l8.081 4.629z" data-name="Path 634"></path>
        </g>
      </>
    )
  },
  eye: {
    viewBox: '0 0 71.304 60.576',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 355"
          transform="translate(-674.654 -656.794)"
        >
          <path
            d="M710.306 705.678a42.8 42.8 0 0033.864-16.643 3.179 3.179 0 000-3.906 42.775 42.775 0 00-67.729 0 3.18 3.18 0 000 3.906 42.806 42.806 0 0033.865 16.643z"
            data-name="Path 635"
          ></path>
          <g data-name="Group 354">
            <path d="M0 0H0.132V5.445H0z" data-name="Rectangle 40" transform="translate(710.24 657.794)"></path>
            <path d="M0 0H3.566V0.132H0z" data-name="Rectangle 41" transform="rotate(-45 1169.703 -549.395)"></path>
            <path d="M0 0H0.132V3.499H0z" data-name="Rectangle 42" transform="rotate(-44.986 1145.025 -497.564)"></path>
            <path d="M0 0H0.132V5.445H0z" data-name="Rectangle 43" transform="translate(710.24 710.925)"></path>
            <path d="M0 0H0.132V3.566H0z" data-name="Rectangle 44" transform="rotate(-45 1220.327 -528.321)"></path>
            <path d="M0 0H3.499V0.132H0z" data-name="Rectangle 45" transform="rotate(-45 1200.932 -474.005)"></path>
          </g>
          <circle cx="13.814" cy="13.814" r="13.814" data-name="Ellipse 10" transform="translate(696.492 673.268)"></circle>
          <circle cx="5.526" cy="5.526" r="5.526" data-name="Ellipse 11" transform="translate(704.78 681.557)"></circle>
        </g>
      </>
    )
  },
  devices: {
    viewBox: '0 0 71.17 58.818',
    path: (
      <>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          data-name="Group 358"
          transform="translate(-818.109 -654.137)"
        >
          <g data-name="Group 356">
            <path d="M819.109 707.014a4.956 4.956 0 004.941 4.941h19.763a4.955 4.955 0 004.94-4.941v-2.47h-29.644z" data-name="Path 636"></path>
            <path d="M843.813 674.9H824.05a4.956 4.956 0 00-4.941 4.941v2.47h29.644v-2.47a4.955 4.955 0 00-4.94-4.941z" data-name="Path 637"></path>
            <path d="M0 0H29.644V22.233H0z" data-name="Rectangle 46" transform="translate(819.109 682.311)"></path>
            <circle cx="0.309" cy="0.309" r="0.309" data-name="Ellipse 12" transform="translate(833.623 707.941)"></circle>
          </g>
          <path
            d="M863.629 707.595S859 702.728 859 699.6h-10.247v7.411a4.88 4.88 0 01-.69 2.471h14.519a1.235 1.235 0 001.047-1.887z"
            data-name="Path 638"
          ></path>
          <g data-name="Group 357">
            <path d="M867.281 707.014a4.955 4.955 0 004.94 4.941h11.117a4.956 4.956 0 004.941-4.941v-2.47h-21z" data-name="Path 639"></path>
            <path d="M883.338 678.606h-11.117a4.955 4.955 0 00-4.94 4.94v2.47h21v-2.47a4.955 4.955 0 00-4.943-4.94z" data-name="Path 640"></path>
            <path d="M0 0H20.998V18.527H0z" data-name="Rectangle 47" transform="translate(867.281 686.016)"></path>
            <circle cx="0.309" cy="0.309" r="0.309" data-name="Ellipse 13" transform="translate(877.471 707.941)"></circle>
          </g>
          <path d="M0 0H18.527V9.881H0z" data-name="Rectangle 48" transform="translate(848.753 689.722)"></path>
          <path
            d="M878.4 655.137h-49.409a4.956 4.956 0 00-4.941 4.941V674.9h19.763a4.955 4.955 0 014.94 4.941v9.881h18.528v-6.176a4.955 4.955 0 014.94-4.94h11.117v-18.528a4.956 4.956 0 00-4.938-4.941z"
            data-name="Path 641"
          ></path>
        </g>
      </>
    )
  },
  'pie-chart': {
    viewBox: '0 0 73.122 73.122',
    path: (
      <>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-name="Group 362" transform="translate(-263.398 -3314.13)">
          <path d="M335.463 3351.816c.012-.377.057-.745.057-1.125a35.41 35.41 0 00-9.861-24.535l-25.528 25.45v.078z" data-name="Path 606"></path>
          <path
            d="M312.895 3327.027l6.314-6.173a33.937 33.937 0 00-19.25-5.724 35.561 35.561 0 1034.332 44.584h-8.632 8.632a35.533 35.533 0 11-34.332-44.584 33.937 33.937 0 0119.25 5.724z"
            data-name="Path 607"
          ></path>
        </g>
      </>
    )
  },
  'cell-phone': {
    viewBox: '0 0 40.252 71.179',
    path: (
      <>
        <g data-name="Group 363" transform="translate(-155 -2882.002)">
          <g data-name="Group 275" transform="translate(40.648 2665.984)">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M120 272.544h28.943m4.66-48.457v58.879a3.228 3.228 0 01-3.131 3.231h-31.99a3.226 3.226 0 01-3.13-3.231v-62.817a3.138 3.138 0 013.13-3.131h31.991a3.14 3.14 0 013.131 3.131z"
              data-name="Path 515"
            ></path>
          </g>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M172.5 2890.39h5.2m-5.2 54.769h5.2"
            data-name="Path 516"
          ></path>
        </g>
      </>
    )
  },
  heart: {
    viewBox: '0 0 71.788 63.957',
    path: (
      <>
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M65.292 6.497h0a18.9 18.9 0 00-26.649 0l-2.749 2.749-2.749-2.749a18.9 18.9 0 00-26.649 0h0a18.9 18.9 0 000 26.649l2.749 2.748 26.649 26.649 26.649-26.649h0l2.749-2.748a18.9 18.9 0 000-26.649z"
          data-name="Path 371"
        ></path>
      </>
    )
  },
  profile: {
    viewBox: '0 0 58.07 72.198',
    path: (
      <>
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M1.09 72.198V26.19S-1.132 1.012 26.263 1.017c0 0 18.312-.858 23.357 20.935l6.76 20.078s2.422 4.137-1.816 4.137h-4.843v10.291s.2 6.256-6.255 6.256h-11.6v9.484"
          data-name="Path 467"
        ></path>
      </>
    )
  },
  'chevron-down': {
    viewBox: '0 0 15 8.576',
    path: (
      <>
        <path
          fill="currentColor"
          d="M13.69 17.238l5.672-5.676a1.067 1.067 0 011.514 0 1.081 1.081 0 010 1.518l-6.426 6.431a1.07 1.07 0 01-1.478.031L6.5 13.084a1.072 1.072 0 011.514-1.518z"
          transform="translate(-6.188 -11.246)"
        ></path>
      </>
    )
  },
  'search-icon': {
    viewBox: '0 0 18 18',
    path: (
      <>
        <path
          fillRule="evenodd"
          d="M11.385 12.4458C8.73476 14.5685 4.85532 14.4014 2.39854 11.9446C-0.237501 9.30856 -0.237501 5.0347 2.39854 2.39866C5.03458 -0.237379 9.30844 -0.237379 11.9445 2.39866C14.4013 4.85544 14.5683 8.73487 12.4457 11.3851L17.6013 16.5408C17.8942 16.8337 17.8942 17.3085 17.6013 17.6014C17.3084 17.8943 16.8335 17.8943 16.5407 17.6014L11.385 12.4458ZM3.4592 10.8839C1.40895 8.83369 1.40895 5.50957 3.4592 3.45932C5.50945 1.40907 8.83357 1.40907 10.8838 3.45932C12.9326 5.50807 12.9341 8.82881 10.8883 10.8794C10.8868 10.8809 10.8853 10.8824 10.8838 10.8839C10.8823 10.8854 10.8808 10.8869 10.8793 10.8884C8.8287 12.9342 5.50795 12.9327 3.4592 10.8839Z"
          fill="#454647"
        />
      </>
    )
  },
  'chevron-down-small': {
    viewBox: '0 0 25 24',
    path: (
      <>
        <path
          d="M17.3304 8.96967C17.6233 9.26256 17.6233 9.73744 17.3304 10.0303L13.3304 14.0303C13.0375 14.3232 12.5626 14.3232 12.2697 14.0303L8.26972 10.0303C7.97683 9.73744 7.97683 9.26256 8.26972 8.96967C8.56261 8.67678 9.03749 8.67678 9.33038 8.96967L12.8 12.4393L16.2697 8.96967C16.5626 8.67678 17.0375 8.67678 17.3304 8.96967Z"
          fill="#454647"
        />
      </>
    )
  },
  twitter: {
    viewBox: '0 0 1200 1227',
    path: (
      <>
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="white"
        />
      </>
    )
  },
  instagram: {
    viewBox: '0 0 448 512',
    path: (
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        fill="#fff"
      />
    )
  },
  linkedin: {
    viewBox: '0 0 20.161 20.145',
    path: (
      <>
        <g transform="translate(0.232 0.027)">
          <g data-name="Group 344" transform="translate(0 0)">
            <path
              data-name="Path 387"
              d="M15.092.2H5.052A5.063,5.063,0,0,0,0,5.252V15.308a5.06,5.06,0,0,0,5.052,5.036H15.108a5.063,5.063,0,0,0,5.052-5.052V5.252A5.087,5.087,0,0,0,15.092.2ZM6.715,16.508H3.837V8.194H6.715ZM5.26,6.915A1.471,1.471,0,1,1,6.731,5.444,1.488,1.488,0,0,1,5.26,6.915Zm11.064,9.593H13.909V12.479c0-.975-.128-2.222-1.455-2.222-1.359,0-1.583,1.055-1.583,2.158v4.093h-2.4V8.194h2.238V9.313h.064a2.625,2.625,0,0,1,2.446-1.135c2.638,0,3.1,1.519,3.1,3.773Z"
              transform="translate(-0.232 -0.227)"
              fill="currentColor"
            />
          </g>
        </g>
      </>
    )
  },
  empathy: {
    viewBox: '0 0 136.953 125.759',
    path: (
      <>
        <g data-name="Group 163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <g data-name="Group 162">
            <path
              data-name="Path 32"
              d="M92.566 123.745v-17.7a1.778 1.778 0 011.773-1.783h20.665a7.65 7.65 0 007.62-7.663V77.705a1.778 1.778 0 011.773-1.783h10.545l-12.388-36.094a1.821 1.821 0 01-.09-.438c-1.6-19.688-16.532-35.32-35.507-37.17A39.028 39.028 0 0056.53 12.372 39.965 39.965 0 0043.506 41.81"
              strokeWidth={4.014}
              style={{
                mixBlendMode: 'multiply',
                isolation: 'isolate'
              }}
            />
            <g data-name="Group 161">
              <path
                data-name="Line 18"
                strokeWidth={4.025}
                style={{
                  mixBlendMode: 'multiply',
                  isolation: 'isolate'
                }}
                d="M43.51 90.695v33.051"
              />
              <path
                data-name="Path 33"
                d="M60.104 72.367c22.806 8.175 33.069-7.226 34.945-9.272 5.89-6.424 11.831-1.808 11.326.532s-12.88 14.141-16.412 16.929a41.672 41.672 0 01-14.072 6.053c-1.192.248-6.16 0-7.593 0-13.332 0-32.676-6.5-32.871-6.61a1.1 1.1 0 00-.473-.115l-32.662.091m-.277-19.933l25.263-.089a.89.89 0 00.742-.449c.151-.259 3.649-6.133 9.239-7.5a9.924 9.924 0 012.352-.283 12.439 12.439 0 016.755 2.2l.017.011c2.506 1.708 4.3 3.086 5.743 4.2 3.506 2.692 5.265 4.043 10.446 5.128h.023l.023.006c1.83.486 3.732.895 5.57 1.29l.031.007c6.363 1.365 14.868 2.8 12.729 8.688"
                strokeWidth={4.014}
                style={{
                  mixBlendMode: 'multiply',
                  isolation: 'isolate'
                }}
              />
            </g>
          </g>
          <path
            data-name="Path 34"
            d="M95.116 26.711h0a10.057 10.057 0 00-14.238 0l-1.469 1.477-1.469-1.477a10.057 10.057 0 00-14.238 0h0a10.2 10.2 0 000 14.319l1.468 1.476 14.239 14.319 14.238-14.319h0l1.468-1.476a10.2 10.2 0 00.001-14.319z"
            strokeWidth={4.014}
            style={{
              mixBlendMode: 'multiply',
              isolation: 'isolate'
            }}
          />
        </g>
      </>
    )
  },
  'brand-connection': {
    viewBox: '0 0 128.599 129.297',
    path: (
      <>
        <g data-name="Group 21" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4.014}>
          <g data-name="Group 20">
            <path data-name="Path 35" d="M30.242 36.26A28.4 28.4 0 002.006 64.649h0A28.4 28.4 0 0030.24 93.041h5.825V36.26z" />
            <path data-name="Path 36" d="M98.358 36.26h-5.824v56.785h5.824a28.4 28.4 0 0028.234-28.392h0A28.4 28.4 0 0098.358 36.26z" />
            <path data-name="Path 37" d="M92.534 30.399A28.4 28.4 0 0064.3 2.007h0a28.4 28.4 0 00-28.233 28.392v5.861h56.468z" />
            <path data-name="Path 38" d="M36.931 105.726A28.354 28.354 0 0064.3 127.29h0a28.4 28.4 0 0028.234-28.392v-5.857H49.545z" />
          </g>
          <path data-name="Path 39" d="M36.067 36.26v62.642a28.261 28.261 0 00.865 6.828l12.614-12.685h42.989V36.26z" />
        </g>
      </>
    )
  },
  facebook: {
    viewBox: '0 0 18.177 18.177',
    path: (
      <>
        <path
          d="M16.524 0H1.652A1.652 1.652 0 000 1.652v14.872a1.652 1.652 0 001.652 1.652h8.262v-7.435H7.436V8.262h2.479V6.931c0-2.52 1.228-3.626 3.322-3.626a12.126 12.126 0 011.785.108v2.37h-1.429c-.889 0-1.2.469-1.2 1.419v1.059H15l-.354 2.479h-2.253v7.436h4.131a1.652 1.652 0 001.652-1.652V1.652A1.653 1.653 0 0016.524 0z"
          fill="currentColor"
        />
      </>
    )
  },
  'linkedin-second': {
    viewBox: '0 0 19.829 19.829',
    path: (
      <>
        <path
          d="M18.012 0H1.817A1.834 1.834 0 000 1.817v16.2a1.834 1.834 0 001.817 1.817h16.2a1.834 1.834 0 001.817-1.817v-16.2A1.834 1.834 0 0018.012 0zM5.784 16.524h-3.3V7.436h3.3zM4.131 6.361a1.533 1.533 0 110-3.056 1.533 1.533 0 110 3.056zm13.22 10.163h-3.3v-4.957c0-1.323-.91-1.652-1.155-1.652s-1.323.165-1.323 1.652v4.957h-3.3V7.436h3.3v1.323a3.147 3.147 0 012.892-1.323c1.569 0 2.892 1.239 2.892 4.131z"
          fill="currentColor"
        />
      </>
    )
  },
  envelope: {
    viewBox: '0 0 24.236 16.524',
    path: (
      <>
        <path d="M0 0v3.127l6.9 3.137 5.216 2.371 12.12-5.508V0zm0 4.877v11.647h24.236V4.877l-12.118 5.508z" fill="currentColor" />
      </>
    )
  },
  menu: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <path
          d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H12H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z"
          fill="black"
        />
        <path
          d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z"
          fill="black"
        />
        <path
          d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z"
          fill="black"
        />
      </>
    )
  },
  'menu-2': {
    viewBox: '0 0 16.69 12.76',
    path: (
      <>
        <g data-name="Group 162" transform="translate(-339.28 -19.05)">
          <rect
            data-name="Rounded Rectangle 1 copy 2"
            width="16.69"
            height="2.29"
            rx="1.145"
            transform="translate(339.28 29.52)"
            fill="currentColor"
          />
          <rect data-name="Rounded Rectangle 1 copy" width="16.69" height="2.29" rx="1.145" transform="translate(339.28 24.29)" fill="currentColor" />
          <rect data-name="Rounded Rectangle 1" width="16.69" height="2.29" rx="1.145" transform="translate(339.28 19.05)" fill="currentColor" />
        </g>
      </>
    )
  },
  close: {
    viewBox: '0 0 13.421 13.661',
    path: (
      <>
        <g transform="translate(-343.914 -18.485)">
          <g data-name="Group 116" transform="translate(0 4)">
            <rect
              data-name="Rounded Rectangle 1 copy"
              width="16.69"
              height="2.29"
              rx="1.145"
              transform="translate(345.534 14.725) rotate(45)"
              fill="currentColor"
            />
            <rect
              data-name="Rounded Rectangle 1"
              width="16.69"
              height="2.29"
              rx="1.145"
              transform="translate(343.914 26.286) rotate(-45)"
              fill="currentColor"
            />
          </g>
        </g>
      </>
    )
  },
  'close-small': {
    viewBox: '0 0 24 24',
    path: (
      <>
        <path d="M8.46458 15.5355L15.5356 8.46448" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.46458 8.46445L15.5356 15.5355" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )
  },
  'cloud-message': {
    viewBox: '0 0 75 54.501',
    path: (
      <>
        <path
          data-name="Ellipse 1 copy"
          d="M888.558,207.793V181H873.631l.006-12.084h-23.88v30.648l6.757-6.759h17.123l-.006-9.673h12.8V206.5l-3.743-3.745H866.808V195.57h-2.13v9.318H881.8l3.56,3.562s.242.24.229.195a16.952,16.952,0,0,1-1.694.085H842.872a17.043,17.043,0,0,1-16.988-17h0a17.043,17.043,0,0,1,16.988-17h3.505v-3.507a17.043,17.043,0,0,1,16.987-17h.038a17.044,17.044,0,0,1,16.988,17v3.507h3.5a17.043,17.043,0,0,1,16.988,17h0a17.065,17.065,0,0,1-12.334,16.346A2.655,2.655,0,0,0,888.558,207.793Z"
          transform="translate(-825.884 -154.228)"
          fill="currentColor"
          fillRule="evenodd"
        />
      </>
    )
  },
  'cloud-bag': {
    viewBox: '0 0 75 54.501',
    path: (
      <>
        <path
          data-name="Ellipse 1 copy 6"
          d="M849.169,1047.761s-3.767,19.292-3.935,19.877c-.483,1.686.856,1.717,1.312,1.715s34.064.036,34.608,0,1.527-.045,1.211-1.614c-.051-.256-3.834-19.877-3.834-19.877v-10.7a1.124,1.124,0,0,0-1.009-1.11h-5.852s.056-2.247,0-5.045c-.06-2.994-3.674-7.688-9.866-6.648a16.9,16.9,0,0,1,11.062-4.124h.038a17.043,17.043,0,0,1,16.988,17v3.507h3.5a17.043,17.043,0,0,1,16.988,17h0a17.043,17.043,0,0,1-16.988,17H852.372a17.043,17.043,0,0,1-16.988-17h0a17.061,17.061,0,0,1,13.57-16.649C849.123,1041.875,849.169,1047.761,849.169,1047.761Zm8.778-11.805h11.805l-.1-4.54s-.755-5.146-5.953-5.146-5.751,5.146-5.751,5.146Z"
          transform="translate(-835.384 -1020.24)"
          fill="currentColor"
          fillRule="evenodd"
        />
      </>
    )
  },
  'cloud-heart': {
    viewBox: '0 0 75 54.501',
    path: (
      <>
        <path
          data-name="Ellipse 1 copy 4"
          d="M867.216,1998.071l-14.338-14.346a13.388,13.388,0,0,1,0-18.908h0a13.393,13.393,0,0,1,18.9,0l.554.554.554-.554a13.288,13.288,0,0,1,7.329-3.743c.059.044.281-.064.281-.064a17.043,17.043,0,0,0-16.988-17h-.037a17.043,17.043,0,0,0-16.988,17v3.508h-3.5a17.044,17.044,0,0,0-16.988,17h0a17.044,17.044,0,0,0,16.988,17H867.5Zm10.134.1,14.439-14.445a13.4,13.4,0,0,0,2.3-15.832c.008-.034.162.123.229.137a17,17,0,0,1,6.676,13.486h0a17.045,17.045,0,0,1-16.988,17h-6.879Zm-15.023-33.983a10.02,10.02,0,0,0-7.138,2.942h0a10.137,10.137,0,0,0,0,14.282l17.143,17.151,17.143-17.151a10.1,10.1,0,0,0-14.276-14.282L872.333,1970l-2.868-2.868A10.017,10.017,0,0,0,862.328,1964.187Z"
          transform="translate(-825.99 -1944.01)"
          fill="currentColor"
          fillRule="evenodd"
        />
      </>
    )
  },
  tiktok: {
    viewBox: '-16.2935 0 254 254',
    path: (
      <>
        <path
          data-name="tiktok"
          d="M35.644,240.409l-.007-.007A80.353,80.353,0,0,1,80.4,93.288a81.208,81.208,0,0,1,11.032.749v9.851h0v34.594a36.769,36.769,0,0,0-27.708,67.87h0a36.8,36.8,0,0,0,53.321-32.711V0H160.8V5.592q.232,2.508.667,4.991A60.865,60.865,0,0,0,189.23,51.649q.169.185.34.368c-.114-.122-.227-.246-.34-.369a60.621,60.621,0,0,0,32.182,9.189v43.474A103.934,103.934,0,0,1,160.8,84.925v88.718A80.419,80.419,0,0,1,35.644,240.409ZM221.413,70.09A60.8,60.8,0,0,1,207.29,65.2,60.478,60.478,0,0,0,221.413,70.09Z"
          transform="translate(0 1)"
          fill="currentColor"
        />
      </>
    )
  }
};

const getIconByName = (name: IconsType, pathId: string) => {
  const icon = CustomIcons[name];
  if (typeof icon.path === 'function') {
    icon.path = icon.path(pathId);
  }
  return icon;
};

export { CustomIcons, getIconByName };
export default CustomIcons;
