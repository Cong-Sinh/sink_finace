import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Button from '../components/button/button';

const introDesc = [
  {
    title: 'Thẩm định bất động sản tự động',
    desc: 'Cơ chế thẩm định tự động bằng công nghệ, tiết kiệm thời gian và giảm sai sót',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.376 4.55214C15.7412 4.25996 16.2602 4.25996 16.6254 4.55214L23.292 9.88547C23.7233 10.2305 23.7932 10.8598 23.4482 11.291C23.1032 11.7223 22.4739 11.7922 22.0427 11.4472L16.0007 6.61363L9.95872 11.4472C9.52745 11.7922 8.89816 11.7223 8.55315 11.291C8.20814 10.8598 8.27806 10.2305 8.70933 9.88547L15.376 4.55214Z"
          fill="#00AEED"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4.33301C20.5523 4.33301 21 4.78072 21 5.33301V15.9997C21 16.552 20.5523 16.9997 20 16.9997H12C11.4477 16.9997 11 16.552 11 15.9997V8.97222C11 8.41994 11.4477 7.97222 12 7.97222C12.5523 7.97222 13 8.41994 13 8.97222V14.9997H19V5.33301C19 4.78072 19.4477 4.33301 20 4.33301Z"
          fill="#00AEED"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.33398 1.33301C4.33398 0.780723 4.7817 0.333008 5.33398 0.333008H26.6673C27.2196 0.333008 27.6673 0.780723 27.6673 1.33301V25.6946C27.6673 28.9473 25.1414 31.6663 21.9266 31.6663H5.33398C4.7817 31.6663 4.33398 31.2186 4.33398 30.6663V1.33301ZM6.33398 2.33301V29.6663H21.9266C23.9482 29.6663 25.6673 27.9335 25.6673 25.6946V2.33301H6.33398Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33398 20C8.33398 19.4477 8.7817 19 9.33398 19H22.6673C23.2196 19 23.6673 19.4477 23.6673 20C23.6673 20.5523 23.2196 21 22.6673 21H9.33398C8.7817 21 8.33398 20.5523 8.33398 20Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33398 25.333C8.33398 24.7807 8.7817 24.333 9.33398 24.333H17.334C17.8863 24.333 18.334 24.7807 18.334 25.333C18.334 25.8853 17.8863 26.333 17.334 26.333H9.33398C8.7817 26.333 8.33398 25.8853 8.33398 25.333Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.6667 21.666C27.219 21.666 27.6667 22.1137 27.6667 22.666C27.6667 24.5126 26.387 26.3327 24.4444 26.3327H23.2222V27.9993C23.2222 29.8459 21.9425 31.666 20 31.666C19.4477 31.666 19 31.2183 19 30.666C19 30.1137 19.4477 29.666 20 29.666C20.512 29.666 21.2222 29.0983 21.2222 27.9993V25.3327C21.2222 24.7804 21.6699 24.3327 22.2222 24.3327H24.4444C24.9565 24.3327 25.6667 23.7649 25.6667 22.666C25.6667 22.1137 26.1144 21.666 26.6667 21.666Z"
          fill="#0045DC"
        />
      </svg>
    ),
  },
  {
    title: 'Khuyến nghị đầu tư thông minh',
    desc: 'Đầu tư bất động sản trở nên dễ dàng, an toàn với lợi nhuận hấp dẫn',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_592_34555)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.4531 15.7736C31.8458 15.3853 31.8494 14.7521 31.4611 14.3594L18.4367 1.18672C18.4228 1.17264 18.4085 1.15898 18.3937 1.14575C17.0678 -0.0448151 15.0591 -0.0489788 13.7281 1.13592C13.7139 1.14855 13.7001 1.16159 13.6867 1.17501L0.54359 14.2922C0.152681 14.6823 0.152057 15.3155 0.542197 15.7064C0.932336 16.0973 1.5655 16.0979 1.95641 15.7078L15.0768 2.61328C15.6406 2.1276 16.4761 2.12916 17.038 2.61669L30.0389 15.7656C30.4272 16.1583 31.0604 16.1619 31.4531 15.7736Z"
            fill="#0045DC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.625 21.75C28.1773 21.75 28.625 21.3023 28.625 20.75V12.5C28.625 11.9477 28.1773 11.5 27.625 11.5C27.0727 11.5 26.625 11.9477 26.625 12.5V20.75C26.625 21.3023 27.0727 21.75 27.625 21.75Z"
            fill="#0045DC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.125 30.75C7.125 31.3023 7.57272 31.75 8.125 31.75H23.875C26.4983 31.75 28.625 29.6233 28.625 27C28.625 26.4477 28.1773 26 27.625 26C27.0727 26 26.625 26.4477 26.625 27C26.625 28.5188 25.3938 29.75 23.875 29.75H8.125C7.57272 29.75 7.125 30.1977 7.125 30.75Z"
            fill="#0045DC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.375 21.875C4.92728 21.875 5.375 21.4273 5.375 20.875V12.4375C5.375 11.8852 4.92728 11.4375 4.375 11.4375C3.82272 11.4375 3.375 11.8852 3.375 12.4375V20.875C3.375 21.4273 3.82272 21.875 4.375 21.875Z"
            fill="#0045DC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.75 24.1875C23.3023 24.1875 23.75 23.7398 23.75 23.1875V19.5C23.75 17.9122 22.4628 16.625 20.875 16.625H17.125C16.5727 16.625 16.125 17.0727 16.125 17.625C16.125 18.1773 16.5727 18.625 17.125 18.625H20.875C21.3582 18.625 21.75 19.0168 21.75 19.5V23.1875C21.75 23.7398 22.1977 24.1875 22.75 24.1875Z"
            fill="#00AEED"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.552904 31.467C0.94888 31.852 1.58198 31.8431 1.96698 31.4471L8.54109 24.6855C8.54144 24.6851 8.5418 24.6848 8.54215 24.6844C8.94543 24.2738 9.60644 24.2707 10.0136 24.6779L11.4797 26.1449C12.673 27.3382 14.6105 27.3294 15.7927 26.1255C15.7932 26.1249 15.7938 26.1244 15.7944 26.1238L21.8043 20.0464C22.1926 19.6537 22.1891 19.0205 21.7964 18.6322C21.4037 18.2439 20.7705 18.2474 20.3822 18.6401L14.3693 24.7205L14.3663 24.7236C13.9629 25.135 13.3015 25.1382 12.8941 24.7309L11.4281 23.2639C10.2338 22.0696 8.29398 22.0793 7.11216 23.2861L7.10964 23.2887L0.533023 30.0529C0.148027 30.4489 0.156929 31.082 0.552904 31.467Z"
            fill="#00AEED"
          />
        </g>
        <defs>
          <clipPath id="clip0_592_34555">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Thu xếp giao dịch nhanh chóng',
    desc: 'Tiếp cận với nguồn vốn nhanh chóng, đơn giản, linh hoạt',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7767 26.0351C25.1252 26.4636 25.0603 27.0935 24.6318 27.4419L20.5332 30.7748C19.5874 31.6545 18.2871 31.9307 17.0962 31.3896C17.0835 31.3839 17.0709 31.3778 17.0585 31.3715L16.8828 31.2827C16.39 31.0334 16.1926 30.4318 16.4419 29.939C16.6911 29.4462 17.2927 29.2487 17.7856 29.498L17.9397 29.576C18.328 29.7453 18.776 29.6865 19.1851 29.2972C19.2039 29.2793 19.2234 29.2621 19.2436 29.2457L23.37 25.8902C23.7984 25.5418 24.4283 25.6066 24.7767 26.0351Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6392 16.6075C12.825 16.4312 13.0713 16.333 13.3274 16.333H19.4849C19.6046 16.333 19.7233 16.3545 19.8354 16.3965L23.9101 17.9215L28.9104 16.9309C29.4492 16.8242 29.9732 17.172 30.0841 17.7099L31.6467 25.2897C31.7013 25.5542 31.6465 25.8295 31.4949 26.053C31.3432 26.2765 31.1077 26.4292 30.8417 26.4763L24.231 27.6472C24.0194 27.6894 23.7925 27.6637 23.5849 27.5588C23.5849 27.5588 23.5849 27.5588 23.5849 27.5588L23.5531 27.5426L23.4628 27.4967C23.384 27.4566 23.2688 27.3977 23.1224 27.3224C22.8296 27.1718 22.4116 26.9554 21.9097 26.6914C20.9067 26.1638 19.5648 25.4445 18.2149 24.6798C17.0995 24.0479 16.0333 23.0956 15.2712 22.3386C15.0442 22.1132 14.8397 21.9005 14.6638 21.7123L14.4017 21.9478C12.7597 23.4227 10.2207 23.3757 8.63732 21.8381C8.44194 21.6483 8.3324 21.3871 8.334 21.1148C8.3356 20.8424 8.44821 20.5825 8.64581 20.3951L12.6392 16.6075ZM15.5134 19.6605L15.5163 19.664L15.5304 19.6808C15.5434 19.6962 15.5634 19.7199 15.5902 19.7511C15.6436 19.8135 15.7235 19.9054 15.8261 20.02C16.0317 20.2496 16.3264 20.5679 16.6806 20.9197C17.4017 21.6359 18.3181 22.4397 19.2007 22.9396C20.5262 23.6905 21.8484 24.3994 22.8407 24.9213C23.3364 25.182 23.7489 25.3956 24.0371 25.5438C24.0934 25.5728 24.145 25.5992 24.1915 25.6231L29.4803 24.6863L28.3256 19.0856L24.02 19.9386C23.8378 19.9747 23.6491 19.9593 23.4751 19.8942L19.3039 18.333H13.7262L10.9754 20.942C11.6879 21.1384 12.4862 20.98 13.0652 20.4599C13.0652 20.4599 13.0652 20.4599 13.0652 20.4599L14.0743 19.5535C14.2769 19.3715 14.545 19.28 14.8166 19.3002C15.0881 19.3204 15.3399 19.4508 15.5134 19.6605C15.5134 19.6605 15.5134 19.6605 15.5134 19.6605Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3038 17.0895C14.4384 17.6251 14.1134 18.1685 13.5777 18.3031L8.28315 19.6337C8.15782 19.6652 8.02757 19.6721 7.89961 19.6541L3.31545 19.0069L2.47781 24.7128L6.41901 25.0466C6.55928 25.0584 6.69546 25.0998 6.81865 25.1679L9.15133 26.4582C9.63462 26.7255 9.8097 27.334 9.54239 27.8173C9.27507 28.3005 8.6666 28.4756 8.18331 28.2083L6.03749 27.0214L1.24962 26.616C0.974749 26.5927 0.721704 26.457 0.550343 26.2408C0.378982 26.0246 0.304528 25.7473 0.344594 25.4743L1.48111 17.7324C1.56101 17.1881 2.06557 16.8106 2.6103 16.8875L7.98544 17.6464L13.0902 16.3634C13.6259 16.2288 14.1692 16.5539 14.3038 17.0895Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1697 17.6798C25.7145 17.589 26.2297 17.957 26.3205 18.5018L27.6539 26.5018C27.7447 27.0465 27.3766 27.5618 26.8319 27.6526C26.2871 27.7434 25.7719 27.3753 25.6811 26.8306L24.3477 18.8306C24.257 18.2858 24.625 17.7706 25.1697 17.6798Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.86363 17.6856C7.40519 17.7939 7.7564 18.3208 7.64809 18.8623L6.31476 25.529C6.20645 26.0706 5.67962 26.4218 5.13806 26.3135C4.5965 26.2051 4.24528 25.6783 4.3536 25.1368L5.68693 18.4701C5.79524 17.9285 6.32207 17.5773 6.86363 17.6856Z"
          fill="#0045DC"
        />
        <path
          d="M18.6771 9.93868C18.6771 9.26336 18.2521 8.33882 16.2274 7.76931C15.5248 7.5717 14.6874 7.21686 14.6874 6.64856C14.6874 6.04692 15.2809 5.55743 16.0105 5.55743C16.3635 5.55743 16.6957 5.67098 16.9458 5.87721C17.2082 6.09355 17.6335 6.0935 17.8958 5.87716C18.1581 5.66081 18.1581 5.31006 17.8958 5.09377C17.5545 4.81241 17.1371 4.61697 16.6823 4.51992V4.1809C16.6823 3.87497 16.3815 3.62695 16.0105 3.62695C15.6395 3.62695 15.3388 3.87497 15.3388 4.1809V4.52028C14.1925 4.76648 13.3439 5.62727 13.3439 6.64851C13.3439 7.32383 13.7689 8.24837 15.7937 8.81789C16.4962 9.01549 17.3336 9.37038 17.3336 9.93868C17.3336 10.5403 16.74 11.0298 16.0105 11.0298C15.1372 11.0298 14.3934 10.6434 14.3809 10.6368C14.0707 10.471 13.6559 10.5431 13.4534 10.7985C13.2503 11.0545 13.3374 11.3978 13.6479 11.5653C13.6834 11.5845 14.3815 11.9554 15.3388 12.0896V12.4063C15.3388 12.7123 15.6395 12.9603 16.0105 12.9603C16.3815 12.9603 16.6823 12.7123 16.6823 12.4063V12.067C17.8285 11.8207 18.6771 10.9599 18.6771 9.93868Z"
          fill="#00AEED"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8114 3.98376C9.5038 6.2914 9.5038 10.0328 11.8114 12.3405C14.1191 14.6481 17.8605 14.6481 20.1681 12.3405C22.4758 10.0328 22.4758 6.2914 20.1681 3.98376C17.8605 1.67613 14.1191 1.67613 11.8114 3.98376ZM10.3972 13.7547C7.30856 10.666 7.30856 5.65824 10.3972 2.56956C13.4859 -0.519115 18.4936 -0.519116 21.5823 2.56956C24.671 5.65824 24.671 10.666 21.5823 13.7547C18.4936 16.8433 13.4859 16.8433 10.3972 13.7547Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.06101 29.0659C8.6638 28.6822 8.65286 28.0491 9.03659 27.6519L11.0366 25.5816C11.4203 25.1844 12.0534 25.1734 12.4506 25.5571C12.8478 25.9409 12.8587 26.5739 12.475 26.9711L10.475 29.0415C10.0913 29.4387 9.45822 29.4496 9.06101 29.0659Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6325 29.7801C10.2303 29.4016 10.2111 28.7687 10.5897 28.3665L12.5897 26.2415C12.9682 25.8394 13.6011 25.8202 14.0032 26.1987C14.4054 26.5772 14.4246 27.2101 14.0461 27.6123L12.0461 29.7373C11.6675 30.1394 11.0347 30.1586 10.6325 29.7801Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4603 30.5144C12.0551 30.1391 12.0307 29.5064 12.406 29.1012L15.531 25.7262C15.9062 25.321 16.5389 25.2966 16.9441 25.6718C17.3494 26.0471 17.3737 26.6798 16.9985 27.085L13.8735 30.46C13.4983 30.8653 12.8656 30.8896 12.4603 30.5144Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3149 31.2267C13.9134 30.8475 13.8953 30.2145 14.2745 29.813L16.3995 27.563C16.7787 27.1615 17.4116 27.1434 17.8132 27.5226C18.2147 27.9018 18.2328 28.5348 17.8535 28.9363L15.7285 31.1863C15.3493 31.5878 14.7164 31.6059 14.3149 31.2267Z"
          fill="#0045DC"
        />
      </svg>
    ),
  },
  {
    title: 'Bảo lãnh giao dịch tin cậy',
    desc: 'An tâm đầu tư với đội ngũ chuyên gia của Meey Finance chuyên nghiệp, kỹ càng và cẩn trọng',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.76172 13.6579C4.76172 13.1613 5.16426 12.7588 5.66082 12.7588H7.9459C8.44247 12.7588 8.84501 13.1613 8.84501 13.6579C8.84501 14.1545 8.44247 14.557 7.9459 14.557H5.66082C5.16426 14.557 4.76172 14.1545 4.76172 13.6579Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.76172 17.0847C4.76172 16.5881 5.16426 16.1855 5.66082 16.1855H15.9436C16.4402 16.1855 16.8427 16.5881 16.8427 17.0847C16.8427 17.5812 16.4402 17.9838 15.9436 17.9838H5.66082C5.16426 17.9838 4.76172 17.5812 4.76172 17.0847Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4746 13.6579C10.4746 13.1613 10.8772 12.7588 11.3737 12.7588H13.6588C14.1554 12.7588 14.5579 13.1613 14.5579 13.6579C14.5579 14.1545 14.1554 14.557 13.6588 14.557H11.3737C10.8772 14.557 10.4746 14.1545 10.4746 13.6579Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33398 3.94592C1.33398 2.50283 2.5038 1.33301 3.9469 1.33301H28.0544C29.4975 1.33301 30.6673 2.50283 30.6673 3.94592V18.7989H28.8691V3.94592C28.8691 3.49595 28.5044 3.13122 28.0544 3.13122H3.9469C3.49693 3.13122 3.1322 3.49595 3.1322 3.94592V19.3701C3.1322 19.8201 3.49693 20.1848 3.9469 20.1848H19.4854V21.9831H3.9469C2.5038 21.9831 1.33398 20.8132 1.33398 19.3701V3.94592Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.7675 6.55895H2.23242V4.76074H29.7675V6.55895Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.7675 9.98669H2.23242V8.18848H29.7675V9.98669Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3841 18.9398V21.8563C20.3841 24.787 22.0339 27.455 24.6265 28.7724C27.219 27.455 28.8688 24.7871 28.8688 21.8563V18.9398C26.0329 17.8187 23.2201 17.8187 20.3841 18.9398ZM19.1199 17.5208C22.78 15.8941 26.473 15.8941 30.1331 17.5208C30.4577 17.6651 30.667 17.9871 30.667 18.3424V21.8563C30.667 25.633 28.4429 29.0555 24.9916 30.5894C24.7592 30.6927 24.4938 30.6927 24.2613 30.5894C20.8102 29.0555 18.5859 25.633 18.5859 21.8563V18.3424C18.5859 17.9871 18.7952 17.6651 19.1199 17.5208Z"
          fill="#00AEED"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0806 21.6354C27.4317 21.9865 27.4317 22.5558 27.0806 22.9069L24.6569 25.3306C24.4883 25.4993 24.2596 25.594 24.0212 25.594C23.7827 25.594 23.554 25.4993 23.3854 25.3306L22.1735 24.1188C21.8224 23.7676 21.8224 23.1984 22.1735 22.8472C22.5246 22.4961 23.0939 22.4961 23.445 22.8472L24.0211 23.4233L25.809 21.6354C26.1601 21.2843 26.7294 21.2843 27.0806 21.6354Z"
          fill="#00AEED"
        />
      </svg>
    ),
  },
  {
    title: 'Kiểm soát giao dịch hiệu quả',
    desc: 'Cơ chế tự giám sát, bảo đảm giao dịch an toàn, hiệu quả, ngăn chặn rủi ro',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.05161 8.05121C3.66431 12.4385 3.66431 19.5517 8.05161 23.939C12.4389 28.3263 19.5521 28.3263 23.9394 23.939C28.3267 19.5517 28.3267 12.4385 23.9394 8.05121C19.5521 3.66391 12.4389 3.66391 8.05161 8.05121ZM6.63741 25.3532C1.46907 20.1849 1.46907 11.8053 6.63741 6.63701C11.8057 1.46866 20.1853 1.46867 25.3536 6.63701C30.522 11.8053 30.522 20.1849 25.3536 25.3532C20.1853 30.5216 11.8057 30.5216 6.63741 25.3532Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9668 25.4619C16.5191 25.4619 16.9668 25.9096 16.9668 26.4619V29.9404C16.9668 30.4927 16.5191 30.9404 15.9668 30.9404C15.4145 30.9404 14.9668 30.4927 14.9668 29.9404V26.4619C14.9668 25.9096 15.4145 25.4619 15.9668 25.4619Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9668 1.05078C16.5191 1.05078 16.9668 1.4985 16.9668 2.05078V5.52923C16.9668 6.08151 16.5191 6.52923 15.9668 6.52923C15.4145 6.52923 14.9668 6.08151 14.9668 5.52923V2.05078C14.9668 1.4985 15.4145 1.05078 15.9668 1.05078Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4336 15.9951C25.4336 15.4428 25.8813 14.9951 26.4336 14.9951H29.9121C30.4644 14.9951 30.9121 15.4428 30.9121 15.9951C30.9121 16.5474 30.4644 16.9951 29.9121 16.9951H26.4336C25.8813 16.9951 25.4336 16.5474 25.4336 15.9951Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.02148 15.9951C1.02148 15.4428 1.4692 14.9951 2.02148 14.9951H5.49993C6.05222 14.9951 6.49993 15.4428 6.49993 15.9951C6.49993 16.5474 6.05222 16.9951 5.49993 16.9951H2.02148C1.4692 16.9951 1.02148 16.5474 1.02148 15.9951Z"
          fill="#0045DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0104 9.125C12.2077 9.125 9.125 12.2077 9.125 16.0104C9.125 19.8132 12.2077 22.8959 16.0104 22.8959C19.8132 22.8959 22.8959 19.8132 22.8959 16.0104C22.8959 12.2077 19.8132 9.125 16.0104 9.125ZM7.125 16.0104C7.125 11.1031 11.1031 7.125 16.0104 7.125C20.9177 7.125 24.8959 11.1031 24.8959 16.0104C24.8959 20.9177 20.9177 24.8959 16.0104 24.8959C11.1031 24.8959 7.125 20.9177 7.125 16.0104Z"
          fill="#0045DC"
        />
        <path
          d="M18.6771 17.5832C18.6771 16.9079 18.2521 15.9833 16.2274 15.4138C15.5248 15.2162 14.6874 14.8614 14.6874 14.2931C14.6874 13.6914 15.2809 13.202 16.0105 13.202C16.3635 13.202 16.6957 13.3155 16.9458 13.5217C17.2082 13.7381 17.6335 13.738 17.8958 13.5217C18.1581 13.3053 18.1581 12.9546 17.8958 12.7383C17.5545 12.4569 17.1371 12.2615 16.6823 12.1645V11.8254C16.6823 11.5195 16.3815 11.2715 16.0105 11.2715C15.6395 11.2715 15.3388 11.5195 15.3388 11.8254V12.1648C14.1925 12.411 13.3439 13.2718 13.3439 14.293C13.3439 14.9684 13.7689 15.8929 15.7937 16.4624C16.4962 16.66 17.3336 17.0149 17.3336 17.5832C17.3336 18.1849 16.74 18.6743 16.0105 18.6743C15.1372 18.6743 14.3934 18.2879 14.3809 18.2813C14.0707 18.1156 13.6559 18.1877 13.4534 18.443C13.2503 18.6991 13.3374 19.0424 13.6479 19.2099C13.6834 19.229 14.3815 19.5999 15.3388 19.7342V20.0509C15.3388 20.3568 15.6395 20.6048 16.0105 20.6048C16.3815 20.6048 16.6823 20.3568 16.6823 20.0509V19.7115C17.8285 19.4652 18.6771 18.6044 18.6771 17.5832Z"
          fill="#00AEED"
        />
      </svg>
    ),
  },
];

const introDesc1 = [
  {
    title: 'Đảm bảo pháp lý (Meey Report)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 32C21.732 32 28 25.732 28 18C28 10.268 21.732 4 14 4C6.26801 4 0 10.268 0 18C0 25.732 6.26801 32 14 32Z"
          fill="url(#paint0_linear_616_45937)"
        />
        <path
          d="M27.3268 6.84864L14.5772 19.5907L8.82982 13.8466C8.66723 13.6834 8.47396 13.5538 8.26113 13.4654C8.0483 13.377 7.82009 13.3315 7.58961 13.3315C7.35912 13.3315 7.13091 13.377 6.91808 13.4654C6.70525 13.5538 6.51198 13.6834 6.34939 13.8466C6.18604 14.0091 6.05641 14.2023 5.96796 14.415C5.87952 14.6277 5.83398 14.8558 5.83398 15.0861C5.83398 15.3165 5.87952 15.5445 5.96796 15.7572C6.05641 15.9699 6.18604 16.1631 6.34939 16.3256L13.3427 23.3148L13.348 23.3201C13.677 23.6485 14.1231 23.833 14.5882 23.833C15.0533 23.833 15.4993 23.6485 15.8284 23.3201L29.8177 9.33811C29.9814 9.17472 30.1112 8.98068 30.1998 8.7671C30.2884 8.55352 30.334 8.32458 30.334 8.09338C30.334 7.86217 30.2884 7.63323 30.1998 7.41965C30.1112 7.20607 29.9814 7.01204 29.8177 6.84864C29.6541 6.68517 29.46 6.55549 29.2463 6.46702C29.0326 6.37854 28.8035 6.33301 28.5722 6.33301C28.3409 6.33301 28.1119 6.37854 27.8982 6.46702C27.6845 6.55549 27.4903 6.68517 27.3268 6.84864Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_616_45937"
            x1="3.5"
            y1="32"
            x2="23.9167"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D47F6" />
            <stop offset="0.90625" stopColor="#00AEED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Đảm bảo giá trị (Meey Value)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 32C21.732 32 28 25.732 28 18C28 10.268 21.732 4 14 4C6.26801 4 0 10.268 0 18C0 25.732 6.26801 32 14 32Z"
          fill="url(#paint0_linear_616_45937)"
        />
        <path
          d="M27.3268 6.84864L14.5772 19.5907L8.82982 13.8466C8.66723 13.6834 8.47396 13.5538 8.26113 13.4654C8.0483 13.377 7.82009 13.3315 7.58961 13.3315C7.35912 13.3315 7.13091 13.377 6.91808 13.4654C6.70525 13.5538 6.51198 13.6834 6.34939 13.8466C6.18604 14.0091 6.05641 14.2023 5.96796 14.415C5.87952 14.6277 5.83398 14.8558 5.83398 15.0861C5.83398 15.3165 5.87952 15.5445 5.96796 15.7572C6.05641 15.9699 6.18604 16.1631 6.34939 16.3256L13.3427 23.3148L13.348 23.3201C13.677 23.6485 14.1231 23.833 14.5882 23.833C15.0533 23.833 15.4993 23.6485 15.8284 23.3201L29.8177 9.33811C29.9814 9.17472 30.1112 8.98068 30.1998 8.7671C30.2884 8.55352 30.334 8.32458 30.334 8.09338C30.334 7.86217 30.2884 7.63323 30.1998 7.41965C30.1112 7.20607 29.9814 7.01204 29.8177 6.84864C29.6541 6.68517 29.46 6.55549 29.2463 6.46702C29.0326 6.37854 28.8035 6.33301 28.5722 6.33301C28.3409 6.33301 28.1119 6.37854 27.8982 6.46702C27.6845 6.55549 27.4903 6.68517 27.3268 6.84864Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_616_45937"
            x1="3.5"
            y1="32"
            x2="23.9167"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D47F6" />
            <stop offset="0.90625" stopColor="#00AEED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Đảm bảo quy hoạch (Meey Map)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 32C21.732 32 28 25.732 28 18C28 10.268 21.732 4 14 4C6.26801 4 0 10.268 0 18C0 25.732 6.26801 32 14 32Z"
          fill="url(#paint0_linear_616_45937)"
        />
        <path
          d="M27.3268 6.84864L14.5772 19.5907L8.82982 13.8466C8.66723 13.6834 8.47396 13.5538 8.26113 13.4654C8.0483 13.377 7.82009 13.3315 7.58961 13.3315C7.35912 13.3315 7.13091 13.377 6.91808 13.4654C6.70525 13.5538 6.51198 13.6834 6.34939 13.8466C6.18604 14.0091 6.05641 14.2023 5.96796 14.415C5.87952 14.6277 5.83398 14.8558 5.83398 15.0861C5.83398 15.3165 5.87952 15.5445 5.96796 15.7572C6.05641 15.9699 6.18604 16.1631 6.34939 16.3256L13.3427 23.3148L13.348 23.3201C13.677 23.6485 14.1231 23.833 14.5882 23.833C15.0533 23.833 15.4993 23.6485 15.8284 23.3201L29.8177 9.33811C29.9814 9.17472 30.1112 8.98068 30.1998 8.7671C30.2884 8.55352 30.334 8.32458 30.334 8.09338C30.334 7.86217 30.2884 7.63323 30.1998 7.41965C30.1112 7.20607 29.9814 7.01204 29.8177 6.84864C29.6541 6.68517 29.46 6.55549 29.2463 6.46702C29.0326 6.37854 28.8035 6.33301 28.5722 6.33301C28.3409 6.33301 28.1119 6.37854 27.8982 6.46702C27.6845 6.55549 27.4903 6.68517 27.3268 6.84864Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_616_45937"
            x1="3.5"
            y1="32"
            x2="23.9167"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D47F6" />
            <stop offset="0.90625" stopColor="#00AEED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Đảm bảo vị trí (Meey Review)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 32C21.732 32 28 25.732 28 18C28 10.268 21.732 4 14 4C6.26801 4 0 10.268 0 18C0 25.732 6.26801 32 14 32Z"
          fill="url(#paint0_linear_616_45937)"
        />
        <path
          d="M27.3268 6.84864L14.5772 19.5907L8.82982 13.8466C8.66723 13.6834 8.47396 13.5538 8.26113 13.4654C8.0483 13.377 7.82009 13.3315 7.58961 13.3315C7.35912 13.3315 7.13091 13.377 6.91808 13.4654C6.70525 13.5538 6.51198 13.6834 6.34939 13.8466C6.18604 14.0091 6.05641 14.2023 5.96796 14.415C5.87952 14.6277 5.83398 14.8558 5.83398 15.0861C5.83398 15.3165 5.87952 15.5445 5.96796 15.7572C6.05641 15.9699 6.18604 16.1631 6.34939 16.3256L13.3427 23.3148L13.348 23.3201C13.677 23.6485 14.1231 23.833 14.5882 23.833C15.0533 23.833 15.4993 23.6485 15.8284 23.3201L29.8177 9.33811C29.9814 9.17472 30.1112 8.98068 30.1998 8.7671C30.2884 8.55352 30.334 8.32458 30.334 8.09338C30.334 7.86217 30.2884 7.63323 30.1998 7.41965C30.1112 7.20607 29.9814 7.01204 29.8177 6.84864C29.6541 6.68517 29.46 6.55549 29.2463 6.46702C29.0326 6.37854 28.8035 6.33301 28.5722 6.33301C28.3409 6.33301 28.1119 6.37854 27.8982 6.46702C27.6845 6.55549 27.4903 6.68517 27.3268 6.84864Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_616_45937"
            x1="3.5"
            y1="32"
            x2="23.9167"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D47F6" />
            <stop offset="0.90625" stopColor="#00AEED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const IntroSwipper = styled.div`
  .swiper-button {
    &-next {
      left: 87%;
      background-color: rgba(255, 255, 255, 0.3);
      width: 48px;
      height: 48px;
      border-radius: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &:after {
        font-size: 18px !important;
        color: white;
      }
    }
    &-prev {
      left: 8.5%;
      width: 48px;
      height: 48px;
      background-color: rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 200px;
      &:after {
        font-size: 18px !important;
        color: white;
      }
    }
  }
`;

const Intro = () => {
  return (
    <Fragment>
      <div className="py-16 max-[740px]:pt-9 max-[740px]:pb-[56px] mx-24 max-[740px]:mx-0">
        <div className="flex justify-center w-full ">
          <h2 className=" mb-14 w-[600px]  leading-[52px] text-center font-bold  font-fontMontserrat text-text text-heading1 z-10 max-[740px]:w-full max-[740px]:leading-7 max-[740px]:text-heading3 max-[740px]:mb-7 max-[740px]:mx-[73px]">
            Vì sao bạn nên chọn Meey Finance?
          </h2>
          <img src="/backgroundIntro1.png" alt="" className="absolute flex justify-center " />
        </div>

        <div className="relative flex max-[740px]:flex-col ">
          <img src="/backgroundIntro.png" alt="" className="max-[740px]:hidden" />
          <div>
            <div className="mb-6 font-normal leading-7 text-black text-heading3 opacity-80 max-[740px]:text-base  max-[740px]:leading-5  max-[740px]:mx-6">
              Meey Finance là đơn vị tiên phong ứng dụng công nghệ AI vào các hoạt động giao dịch bất động sản
            </div>
            <div className="px-7  max-[740px]:px-6">
              {introDesc.map((item) => (
                <div key={item.title} className="flex py-4 ">
                  <div className="max-[740px]:w-6 max-[740px]:h-8 max-[740px]:mt-2"> {item.icon}</div>

                  <div className="mx-4 text-text max-[740px]:text-left max-[740px]:pl-4 ">
                    <h3 className="font-semibold leading-8 text-heading3 max-[740px]:text-heading5  ">{item.title}</h3>
                    <p className="font-normal leading-5 text-heading5 max-[740px]:text-sm  ">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src="/backgroundIntro.png" alt="" className="min-[739px]:hidden max-[740px]:mt-7" />
        </div>
      </div>

      <div style={{ backgroundColor: '#EAF3FF' }}>
        <div className="flex pl-4 max-[740px]:pl-0 max-[740px]:flex-col ">
          <img src="/backgroundIntro2.png" alt="" className="max-[740px]:hidden" />
          <div className="py-[123px] w-[603px] text-left max-[740px]:pt-[48px] max-[740px]:pb-0 max-[740px]:w-full max-[740px]:text-center max-[760px]:px-6">
            <h3 className=" font-bold font-fontMontserrat leading-[58px] text-darkblue text-heading1 max-[740px]:text-heading3 max-[740px]:leading-7  ">
              Thẩm định bất động sản toàn diện
            </h3>
            <div className="my-6 font-normal leading-7 text-black text-heading3 opacity-80 max-[740px]:leading-5 max-[740px]:text-heading5 max-[740px]:text-left ">
              Báo cáo thẩm định bất động sản chuyên sâu All-in-one với sự kết hợp đa công nghệ
            </div>
            <div className="my-6 ">
              {introDesc1.map((item) => (
                <div key={item.title} className="flex mb-6 max-[740px]:text-left ">
                  {item.icon}
                  <div className="mx-4 max-[740px]:ml-[10px]  text-text">
                    <h3 className="font-semibold leading-8 text-heading3 max-[740px]:text-heading5  text-darkblue">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
              <Button to="/" className="mt-3 max-[740px]:left-[50%] max-[740px]:translate-x-[-50%]" bgColor="secondary">
                <div className="flex">
                  xem thêm <img src="/iconRight.png" alt="" className="object-contain ml-[10px]" />
                </div>
              </Button>
            </div>
            <img src="/Mobie_backgroundIntro2.png" alt="" className="mt-[121px] min-[739px]:hidden" />
          </div>
        </div>
      </div>

      <div className="pt-[142px] max-[740px]:pt-16">
        <div className="flex justify-center max-[740px]:px-6 max-[740px]:mb-[70px] max-[740px]:block">
          <div className=" pb-[60px] w-[578px] max-[740px]:w-full">
            <h3 className="mb-6  text-left  font-bold font-fontMontserrat leading-[58px] text-darkblue text-heading1 max-[740px]:leading-7 max-[740px]:text-heading3 max-[740px]:text-center ">
              Tư vấn & khuyến nghị giao dịch bất động sản
            </h3>
            <div className="font-normal leading-7 text-left mb-[60px] text-black text-heading3 opacity-80 max-[740px]:leading-5 max-[740px]:text-Base max-[740px]:mb-9 ">
              Tư vấn, khuyến nghị các bất động sản có tiềm năng tăng giá tốt và đem lại dòng tiền bền vững từ phân tích
              dữ liệu lớn và kinh nghiệm đầu tư tài chính chuyên nghiệp.
            </div>

            <Button to="/" bgColor="secondary" className="max-[740px]:left-[50%] max-[740px]:translate-x-[-50%] ">
              <div className="flex">
                xem thêm <img src="/iconRight.png" alt="" className="object-contain ml-[10px]" />
              </div>
            </Button>
          </div>
          <div>
            <img src="/backgroundIntro3.png" alt="" className=" pl-4 max-[740px]:mt-12" />
          </div>
        </div>
      </div>
      <div className="flex" style={{ backgroundColor: 'lightblue' }}>
        <div className="flex mx-auto max-[740px]:mx-6 max-[740px]:block ">
          <img src="/backgroundIntro4.png" alt="" className="relative pt-[51px] max-[740px]:hidden " />
          <div className="pt-[148px] pl-5 pb-[189px] text-left  w-[603px] max-[740px]:pt-12 max-[740px]:pl-0 max-[740px]:pb-0  max-[740px]:w-full ">
            <h3 className="mb-6 font-bold font-fontMontserrat leading-[58px] text-text text-heading1 max-[740px]:text-heading3 max-[740px]:leading-7 max-[740px]:text-center">
              Đầu tư tài chính bất động sản
            </h3>
            <div className="font-normal w-[578px] mb-[60px] leading-7 text-black text-heading3 opacity-80 max-[740px]:text-heading5 max-[740px]:mb-5 max-[740px]:w-full max-[740px]:text-left">
              Các sản phẩm đầu tư tài chính an toàn, minh bạch và uy tín với lợi nhuận hấp dẫn được đảm bảo bằng bất
              động sản.
            </div>
            <Button to="/" bgColor="secondary" className="max-[740px]:left-[50%] max-[740px]:translate-x-[-50%]">
              <div className="flex">
                xem thêm <img src="/iconRight.png" alt="" className="object-contain ml-[10px]" />
              </div>
            </Button>
            <img src="/Mobi_backgroundIntro1.png" alt="" className="relative  min-[739px]:hidden " />
          </div>
        </div>
      </div>

      <div className="pt-[140px] max-[739px]:pt-0 ">
        <div className="flex justify-center max-[739px]:block">
          <div className="pt-[84px] text-left mr-[67px] pb-[114px] w-[565px] max-[739px]:w-full max-[739px]:px-6 max-[739px]:pt-16 max-[739px]:pb-0">
            <h3 className="font-bold font-fontMontserrat leading-[58px] text-text text-heading1  max-[739px]:text-heading3 max-[739px]:leading-7 max-[739px]:text-center">
              Kết nối giao dịch
            </h3>
            <div className="mt-10 mb-[60px] font-normal leading-7 text-black text-heading3 opacity-80 max-[739px]:text-base max-[739px]:w-full max-[739px]:my-6 ">
              Kết nối trực tiếp với nhà đầu tư và khách hàng, đem lại cơ hội cơ hội đầu tư bất động sản an toàn, hấp
              dẫn, thanh khoản cao được đảm bảo bởi Meey Finance.
            </div>
            <Button to="/" bgColor="secondary" className="max-[739px]:left-[50%] max-[739px]:translate-x-[-50%]">
              <div className="flex">
                xem thêm <img src="/iconRight.png" alt="" className="object-contain ml-[10px]" />
              </div>
            </Button>
          </div>
          <div>
            <img src="/backgroundIntro5.png" alt="" className="max-[740px]:hidden " />
          </div>
          <div>
            <img
              src="/backgroundIntro5.png"
              alt=""
              className="min-[739px]:hidden  text-center max-[739px]:pt-20  max-[739px]:ml-[-5%]"
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center text-center max-[739px]:mx-6 max-[740px]:mb-6 ">
        <img src="/client.png" alt="" className="rounded-lg max-[739px]:hidden" />
        <img src="/mobi_client.png" alt="" className="rounded-lg min-[740px]:hidden" />
        <div className="absolute min-[739px]:left-[149px] ">
          <h3 className=" mt-[71px] font-fontMontserrat font-bold text-heading1 leading-[58px] text-white max-[739px]:text-heading3 max-[739px]:leading-6">
            Khách hàng & Đối tác
          </h3>
          <div className="flex text-white ">
            <div className="flex grid-cols-3 text-left mt-7  max-[739px]:flex-col">
              <div className="col-span-1 max-[739px]:pb-8">
                <div className="font-bold leading-9 text-heading2  max-[739px]:text-heading3 ">100.000</div>
                <div className="w-[200px] font-normal text-heading5 leading-5 text-white opacity-80 max-[739px]:text-Base max-[739px]:leading-5">
                  Số lượng khách hàng
                </div>
              </div>
              <div className="col-span-1 border-l-[1px] h-[50%] pl-4 max-[739px]:pl-0 max-[739px]:border-l-0  max-[739px]:pb-8 ">
                <div className="font-bold leading-9 text-heading2  max-[739px]:text-heading3 ">1.000</div>
                <div className="w-[200px] font-normal text-heading5 leading-5 text-white opacity-80">
                  Số lượng giao dịch bình quân/tháng
                </div>
              </div>
              <div className="col-span-1 border-l-[1px] h-[50%] pl-4 max-[739px]:pl-0 max-[739px]:border-l-0  max-[739px]:pb-8">
                <div className="font-bold leading-9 text-heading2  max-[739px]:text-heading3 ">3.000 tỷ</div>
                <div className="w-[200px] font-normal text-heading5 leading-5 text-white opacity-80">
                  Giá trị giao dịch lũy kế
                </div>
              </div>
            </div>
            <img src="/Mobi_client1_1.png" alt="" className=" bottom-[-70%]  absolute min-[739px]:hidden " />
          </div>
          <img src="/backgroundIntro5.png_1" alt="" className="mt-10 max-[739px]:hidden " />
        </div>
      </div>
      <div className="max-[740px]:hidden">
        <IntroSwipper>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="flex justify-center my-[64px]">
                <img src="/backgroundIntro6.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center my-[64px]">
                <img src="/backgroundIntro6.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </IntroSwipper>
      </div>
    </Fragment>
  );
};

export default Intro;
