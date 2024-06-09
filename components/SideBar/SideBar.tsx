import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SideBar = () => {
  return (
    // nav container
    <nav
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl hidden flex-wrap items-center justify-between text-white relative md:w-[18rem] z-10 py-[3.88rem] px-8"
    >
      {/* nav content */}
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <div>
          {/* brand logo */}
          <div className="space-y-1">
            <svg
              width="144"
              height="22"
              viewBox="0 0 144 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.232 17H0.72V0.92H9.624C13.44 0.92 15.84 3.104 15.84 6.92C15.84 10.736 13.44 12.944 9.624 12.944H5.232V17ZM9.12 4.976H5.232V8.888H9.12C10.704 8.888 11.352 8.576 11.352 6.92C11.352 5.288 10.704 4.976 9.12 4.976ZM20.7101 17.24C17.9741 17.24 16.4381 15.992 16.4381 13.928C16.4381 12.224 17.6141 11 20.3501 10.736L25.2701 10.256V10.016C25.2701 8.792 24.7421 8.6 23.1341 8.6C21.6461 8.6 21.1901 8.888 21.1901 9.896V9.992H16.6781V9.944C16.6781 6.728 19.3661 4.664 23.4701 4.664C27.6941 4.664 29.7341 6.728 29.7341 10.112V17H25.5101V14.456H25.2701C24.8141 16.16 23.3261 17.24 20.7101 17.24ZM20.9741 13.64C20.9741 14.024 21.3581 14.096 22.0541 14.096C24.2381 14.096 25.1261 13.832 25.2461 12.752L21.5501 13.184C21.1421 13.232 20.9741 13.376 20.9741 13.64ZM33.7356 21.08H31.5516V17H35.0556C35.4156 17 35.7036 16.952 35.8956 16.856L30.1116 4.904H35.2476L37.3356 9.656L38.1996 12.44H38.5116L39.3036 9.608L41.1036 4.904H46.1436L40.4076 17.48C39.1116 20.336 37.2636 21.08 33.7356 21.08ZM50.8581 17H46.6341V0.92H51.1461V8.024H51.3861C51.7461 6.008 53.0901 4.664 55.9461 4.664C59.4981 4.664 61.4901 7.016 61.4901 10.952C61.4901 14.864 59.4501 17.24 55.7541 17.24C52.9221 17.24 51.4821 16.136 51.0981 13.736H50.8581V17ZM51.1461 10.976C51.1461 12.728 52.1061 13.112 54.1221 13.112C56.2101 13.112 56.9301 12.56 56.9301 10.952C56.9301 9.344 56.2101 8.768 54.1221 8.768C52.1061 8.768 51.1461 9.104 51.1461 10.808V10.976ZM69.3848 17.24C65.1848 17.24 62.3288 14.864 62.3288 10.952C62.3288 7.016 65.1848 4.664 69.3848 4.664C73.5848 4.664 76.4408 7.016 76.4408 10.952C76.4408 14.864 73.5848 17.24 69.3848 17.24ZM69.3848 13.256C71.4248 13.256 71.9768 12.704 71.9768 10.952C71.9768 9.2 71.4248 8.624 69.3848 8.624C67.3448 8.624 66.7928 9.2 66.7928 10.952C66.7928 12.704 67.3448 13.256 69.3848 13.256ZM82.0127 17H76.5647L81.0767 11.144V10.904L76.5647 4.904H82.0847L84.5567 8.552H84.7967L87.1727 4.904H92.6207L88.1087 10.832V11.072L92.6207 17H87.1007L84.6287 13.448H84.3887L82.0127 17ZM100.839 17.24C95.4146 17.24 92.8706 15.2 92.8706 11.384V11H97.6706V11.432C97.6706 12.632 97.7666 12.92 100.623 12.92C103.359 12.92 104.079 12.68 104.079 11.696C104.079 10.904 103.623 10.64 102.567 10.64H97.7906V6.944H102.231C103.119 6.944 103.407 6.632 103.407 6.032C103.407 5.264 102.975 5 100.575 5C98.1026 5 97.6706 5.288 97.6706 6.488V6.56H92.8706V6.536C92.8706 2.96 95.5346 0.68 101.007 0.68C105.471 0.68 107.895 2.096 107.895 5C107.895 6.872 106.767 8.072 104.631 8.312V8.624C107.031 8.888 108.663 10.016 108.663 12.464C108.663 15.632 105.783 17.24 100.839 17.24ZM118.034 17.24C111.818 17.24 109.346 14.624 109.346 9.08C109.346 3.104 112.898 0.68 117.578 0.68C122.33 0.68 125.21 2.888 125.21 6.2V6.416H120.17V6.2C120.17 5.096 119.402 5 117.578 5C115.178 5 114.194 5.36 114.194 8.168V9.032H114.506C115.226 7.976 116.738 7.064 119.45 7.064C123.434 7.064 125.594 8.528 125.594 11.888C125.594 15.152 123.026 17.24 118.034 17.24ZM117.77 12.896C120.338 12.896 120.842 12.488 120.842 11.552C120.842 10.496 120.338 10.136 117.77 10.136C114.89 10.136 114.458 10.496 114.458 11.552C114.458 12.488 114.962 12.896 117.77 12.896ZM134.949 17.24C129.477 17.24 126.621 13.904 126.621 8.96C126.621 4.04 129.477 0.68 134.949 0.68C140.397 0.68 143.253 4.04 143.253 8.96C143.253 13.904 140.397 17.24 134.949 17.24ZM134.949 12.848C137.685 12.848 138.405 11.936 138.405 8.96C138.405 5.984 137.685 5.072 134.949 5.072C132.189 5.072 131.469 5.984 131.469 8.96C131.469 11.936 132.189 12.848 134.949 12.848Z"
                fill="white"
              />
            </svg>
            <svg
              width="78"
              height="12"
              viewBox="0 0 78 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.488 9H0.72V0.96H1.572V4.728H1.632C1.884 3.708 2.736 2.952 4.164 2.952C6.024 2.952 7.044 4.236 7.044 6.036C7.044 7.836 6.024 9.12 4.092 9.12C2.772 9.12 1.824 8.436 1.548 7.248H1.488V9ZM1.572 6.132C1.572 7.536 2.46 8.34 3.888 8.34C5.304 8.34 6.18 7.752 6.18 6.036C6.18 4.32 5.28 3.744 3.912 3.744C2.412 3.744 1.572 4.56 1.572 6.024V6.132ZM8.87109 11.04H8.12709V10.26H9.02709C9.62709 10.26 9.85509 10.08 10.0831 9.588L10.3711 8.988L7.43109 3.072H8.36709L10.1071 6.6L10.7671 8.052H10.8391L11.4751 6.588L13.1191 3.072H14.0551L10.8391 9.828C10.4071 10.74 9.85509 11.04 8.87109 11.04ZM23.0314 9H17.0794V0.96H17.9314V8.22H23.0314V9ZM24.8454 2.316H23.9934V0.96H24.8454V2.316ZM24.8454 9H23.9934V3.072H24.8454V9ZM27.0466 9H26.2786V0.96H27.1306V4.728H27.1906C27.4426 3.708 28.2946 2.952 29.7226 2.952C31.5826 2.952 32.6026 4.236 32.6026 6.036C32.6026 7.836 31.5826 9.12 29.6506 9.12C28.3306 9.12 27.3826 8.436 27.1066 7.248H27.0466V9ZM27.1306 6.132C27.1306 7.536 28.0186 8.34 29.4466 8.34C30.8626 8.34 31.7386 7.752 31.7386 6.036C31.7386 4.32 30.8386 3.744 29.4706 3.744C27.9706 3.744 27.1306 4.56 27.1306 6.024V6.132ZM36.4697 9.12C34.5617 9.12 33.3497 7.92 33.3497 6.036C33.3497 4.236 34.5497 2.952 36.4577 2.952C38.1977 2.952 39.4337 3.96 39.4337 5.724C39.4337 5.94 39.4097 6.12 39.3737 6.276H34.1537C34.2017 7.608 34.8857 8.412 36.4577 8.412C37.8497 8.412 38.4977 7.896 38.4977 7.032V6.948H39.3497V7.032C39.3497 8.268 38.1257 9.12 36.4697 9.12ZM36.4457 3.66C34.9097 3.66 34.2137 4.452 34.1537 5.748H38.6297C38.6297 5.688 38.6297 5.628 38.6297 5.568C38.6297 4.32 37.8377 3.66 36.4457 3.66ZM41.4158 9H40.5638V3.072H41.3318V4.692H41.3918C41.5718 3.744 42.2438 2.952 43.4798 2.952C44.8478 2.952 45.4478 3.96 45.4478 5.064V5.652H44.5958V5.196C44.5958 4.188 44.1758 3.696 43.1438 3.696C41.9438 3.696 41.4158 4.452 41.4158 5.784V9ZM50.0708 9H48.7868C47.6108 9 46.8548 8.508 46.8548 7.116V3.804H45.7988V3.072H46.8548V1.656H47.7188V3.072H50.0708V3.804H47.7188V7.164C47.7188 7.992 48.1268 8.22 48.9908 8.22H50.0708V9ZM51.7852 11.04H51.0412V10.26H51.9412C52.5412 10.26 52.7692 10.08 52.9972 9.588L53.2852 8.988L50.3452 3.072H51.2812L53.0212 6.6L53.6812 8.052H53.7532L54.3892 6.588L56.0332 3.072H56.9692L53.7532 9.828C53.3212 10.74 52.7692 11.04 51.7852 11.04ZM58.6423 9H57.7903V0.96H61.4863C63.2263 0.96 64.4503 1.956 64.4503 3.672C64.4503 5.4 63.2263 6.396 61.4863 6.396H58.6423V9ZM61.4143 1.74H58.6423V5.616H61.4143C62.8303 5.616 63.5863 5.04 63.5863 3.672C63.5863 2.328 62.8303 1.74 61.4143 1.74ZM67.0163 9.12C65.8523 9.12 65.0603 8.568 65.0603 7.608C65.0603 6.636 65.8643 6.216 66.9683 6.096L69.7883 5.784V5.328C69.7883 4.176 69.2843 3.72 67.9883 3.72C66.7163 3.72 66.0443 4.176 66.0443 5.22V5.268H65.1923V5.22C65.1923 3.972 66.2243 2.952 68.0483 2.952C69.8483 2.952 70.6163 3.984 70.6163 5.292V9H69.8483V7.404H69.7883C69.4403 8.496 68.3963 9.12 67.0163 9.12ZM65.9123 7.548C65.9123 8.148 66.3083 8.46 67.2083 8.46C68.6483 8.46 69.7883 7.824 69.7883 6.396V6.348L67.2323 6.636C66.3443 6.72 65.9123 6.936 65.9123 7.548ZM72.7969 11.04H72.0529V10.26H72.9529C73.5529 10.26 73.7809 10.08 74.0089 9.588L74.2969 8.988L71.3569 3.072H72.2929L74.0329 6.6L74.6929 8.052H74.7649L75.4009 6.588L77.0449 3.072H77.9809L74.7649 9.828C74.3329 10.74 73.7809 11.04 72.7969 11.04Z"
                fill="white"
              />
            </svg>
          </div>

          {/* divider */}
          <div className="my-5">
            <svg
              width="224"
              height="1"
              viewBox="0 0 224 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.2"
                y1="0.8"
                x2="224"
                y2="0.8"
                stroke="white"
                strokeWidth="0.4"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* primary navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <a className="flex items-center  py-3 pl-6 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.825 18.9583H5.17502C2.89169 18.9583 1.04169 17.1 1.04169 14.8167V8.64166C1.04169 7.50833 1.74169 6.08333 2.64169 5.38333L7.13335 1.88333C8.48335 0.833332 10.6417 0.783332 12.0417 1.76667L17.1917 5.375C18.1834 6.06666 18.9584 7.55 18.9584 8.75833V14.825C18.9584 17.1 17.1084 18.9583 14.825 18.9583ZM7.90002 2.86667L3.40835 6.36666C2.81669 6.83333 2.29169 7.89166 2.29169 8.64166V14.8167C2.29169 16.4083 3.58335 17.7083 5.17502 17.7083H14.825C16.4167 17.7083 17.7084 16.4167 17.7084 14.825V8.75833C17.7084 7.95833 17.1334 6.85 16.475 6.4L11.325 2.79167C10.375 2.125 8.80835 2.15833 7.90002 2.86667Z"
                    fill="white"
                  />
                  <path
                    d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                    fill="white"
                  />
                </svg>
                Home
              </a>
            </li>

            <li className="items-center">
              <a
                className="flex items-center py-3 pl-6 rounded-lg bg-[#192749]"
                href="/"
              >
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8334 8.95835H14.1667C12.15 8.95835 11.0417 7.85002 11.0417 5.83335V4.16669C11.0417 2.15002 12.15 1.04169 14.1667 1.04169H15.8334C17.85 1.04169 18.9584 2.15002 18.9584 4.16669V5.83335C18.9584 7.85002 17.85 8.95835 15.8334 8.95835ZM14.1667 2.29169C12.85 2.29169 12.2917 2.85002 12.2917 4.16669V5.83335C12.2917 7.15002 12.85 7.70835 14.1667 7.70835H15.8334C17.15 7.70835 17.7084 7.15002 17.7084 5.83335V4.16669C17.7084 2.85002 17.15 2.29169 15.8334 2.29169H14.1667Z"
                    fill="#5879FD"
                  />
                  <path
                    d="M5.83335 18.9583H4.16669C2.15002 18.9583 1.04169 17.85 1.04169 15.8333V14.1667C1.04169 12.15 2.15002 11.0417 4.16669 11.0417H5.83335C7.85002 11.0417 8.95835 12.15 8.95835 14.1667V15.8333C8.95835 17.85 7.85002 18.9583 5.83335 18.9583ZM4.16669 12.2917C2.85002 12.2917 2.29169 12.85 2.29169 14.1667V15.8333C2.29169 17.15 2.85002 17.7083 4.16669 17.7083H5.83335C7.15002 17.7083 7.70835 17.15 7.70835 15.8333V14.1667C7.70835 12.85 7.15002 12.2917 5.83335 12.2917H4.16669Z"
                    fill="#5879FD"
                  />
                  <path
                    d="M5.00002 8.95835C2.81669 8.95835 1.04169 7.18335 1.04169 5.00002C1.04169 2.81669 2.81669 1.04169 5.00002 1.04169C7.18335 1.04169 8.95835 2.81669 8.95835 5.00002C8.95835 7.18335 7.18335 8.95835 5.00002 8.95835ZM5.00002 2.29169C3.50835 2.29169 2.29169 3.50835 2.29169 5.00002C2.29169 6.49169 3.50835 7.70835 5.00002 7.70835C6.49169 7.70835 7.70835 6.49169 7.70835 5.00002C7.70835 3.50835 6.49169 2.29169 5.00002 2.29169Z"
                    fill="#5879FD"
                  />
                  <path
                    d="M15 18.9583C12.8167 18.9583 11.0417 17.1833 11.0417 15C11.0417 12.8167 12.8167 11.0417 15 11.0417C17.1834 11.0417 18.9584 12.8167 18.9584 15C18.9584 17.1833 17.1834 18.9583 15 18.9583ZM15 12.2917C13.5084 12.2917 12.2917 13.5083 12.2917 15C12.2917 16.4917 13.5084 17.7083 15 17.7083C16.4917 17.7083 17.7084 16.4917 17.7084 15C17.7084 13.5083 16.4917 12.2917 15 12.2917Z"
                    fill="#5879FD"
                  />
                </svg>
                Analytics Dashboard
              </a>
            </li>
          </ul>

          {/* divider */}
          <div className="my-5">
            <svg
              width="224"
              height="1"
              viewBox="0 0 224 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.2"
                y1="0.8"
                x2="224"
                y2="0.8"
                stroke="white"
                strokeWidth="0.4"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* secondary navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <a className="flex items-center  py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50002 18.3338H12.5C16.6667 18.3338 18.3334 16.6671 18.3334 12.5005V7.50048C18.3334 3.33381 16.6667 1.66714 12.5 1.66714H7.50002C3.33335 1.66714 1.66669 3.33381 1.66669 7.50048V12.5005C1.66669 16.6671 3.33335 18.3338 7.50002 18.3338Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9593 9.09226C11.8759 9.68392 11.5259 10.1839 11.0426 10.4839V12.1339C11.0426 12.7089 10.5759 13.1756 10.0009 13.1756C9.42592 13.1756 8.95925 12.7089 8.95925 12.1339V10.4839C8.47592 10.1839 8.12591 9.68392 8.04258 9.09226C8.02591 9.00059 8.01758 8.90059 8.01758 8.80059C8.01758 7.53392 9.21759 6.55059 10.5343 6.90059C11.2009 7.07559 11.7426 7.61726 11.9176 8.28392C11.9926 8.55892 12.0009 8.83392 11.9593 9.09226Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M18.3347 9.09229H11.9597"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8.04168 9.09216H1.66669"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                Personal
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.50836 9.68253V13.4242C2.50836 17.1659 4.00836 18.6659 7.75003 18.6659H12.2417C15.9834 18.6659 17.4834 17.1659 17.4834 13.4242V9.68253"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99999 10.3325C11.525 10.3325 12.65 9.09084 12.5 7.56584L11.95 1.99918H8.05832L7.49999 7.56584C7.34999 9.09084 8.47499 10.3325 9.99999 10.3325Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2584 10.3325C16.9417 10.3325 18.175 8.96584 18.0084 7.29084L17.775 4.99918C17.475 2.83251 16.6417 1.99918 14.4584 1.99918H11.9167L12.5 7.84084C12.6417 9.21584 13.8834 10.3325 15.2584 10.3325Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.70002 10.3325C6.07502 10.3325 7.31669 9.21584 7.45002 7.84084L7.63336 5.99918L8.03336 1.99918H5.49169C3.30836 1.99918 2.47502 2.83251 2.17502 4.99918L1.95002 7.29084C1.78336 8.96584 3.01669 10.3325 4.70002 10.3325Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14.4992C8.60835 14.4992 7.91669 15.1908 7.91669 16.5825V18.6658H12.0834V16.5825C12.0834 15.1908 11.3917 14.4992 10 14.4992Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Sale Hub
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7666 1.88333L16.1916 4.80833C16.825 5.14999 16.825 6.12499 16.1916 6.46666L10.7666 9.39166C10.2833 9.64999 9.71665 9.64999 9.23331 9.39166L3.80831 6.46666C3.17498 6.12499 3.17498 5.14999 3.80831 4.80833L9.23331 1.88333C9.71665 1.62499 10.2833 1.62499 10.7666 1.88333Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.00835 8.44167L8.05002 10.9667C8.67502 11.2833 9.07502 11.925 9.07502 12.625V17.3917C9.07502 18.0833 8.35002 18.525 7.73335 18.2167L2.69169 15.6917C2.06669 15.375 1.66669 14.7333 1.66669 14.0333V9.26667C1.66669 8.575 2.39169 8.13333 3.00835 8.44167Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9917 8.44167L11.95 10.9667C11.325 11.2833 10.925 11.925 10.925 12.625V17.3917C10.925 18.0833 11.65 18.525 12.2667 18.2167L17.3083 15.6917C17.9333 15.375 18.3333 14.7333 18.3333 14.0333V9.26667C18.3333 8.575 17.6083 8.13333 16.9917 8.44167Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Talent management
                <FaChevronRight className="ml-3" />
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3106 7.70834H1.79316C1.42556 7.70834 1.12073 7.42501 1.12073 7.08334C1.12073 6.74168 1.42556 6.45834 1.79316 6.45834H10.3106C10.6782 6.45834 10.9831 6.74168 10.9831 7.08334C10.9831 7.42501 10.6782 7.70834 10.3106 7.70834Z"
                    fill="white"
                  />
                  <path
                    d="M7.17262 14.375H5.37946C5.01187 14.375 4.70703 14.0917 4.70703 13.75C4.70703 13.4083 5.01187 13.125 5.37946 13.125H7.17262C7.54022 13.125 7.84505 13.4083 7.84505 13.75C7.84505 14.0917 7.54022 14.375 7.17262 14.375Z"
                    fill="white"
                  />
                  <path
                    d="M13.0004 14.375H9.41407C9.04647 14.375 8.74164 14.0917 8.74164 13.75C8.74164 13.4083 9.04647 13.125 9.41407 13.125H13.0004C13.368 13.125 13.6728 13.4083 13.6728 13.75C13.6728 14.0917 13.368 14.375 13.0004 14.375Z"
                    fill="white"
                  />
                  <path
                    d="M15.7439 17.7083H5.77396C2.20559 17.7083 1.12073 16.7083 1.12073 13.425V6.57499C1.12073 3.29166 2.20559 2.29166 5.77396 2.29166H13.0004C13.368 2.29166 13.6728 2.57499 13.6728 2.91666C13.6728 3.25832 13.368 3.54166 13.0004 3.54166H5.77396C2.95871 3.54166 2.46559 3.99166 2.46559 6.57499V13.4167C2.46559 16 2.95871 16.45 5.77396 16.45H15.7349C18.5502 16.45 19.0433 16 19.0433 13.4167V10.0167C19.0433 9.67499 19.3481 9.39166 19.7157 9.39166C20.0833 9.39166 20.3882 9.67499 20.3882 10.0167V13.4167C20.3971 16.7083 19.3123 17.7083 15.7439 17.7083Z"
                    fill="white"
                  />
                  <path
                    d="M13.9149 9.53335C13.5652 9.53335 13.2335 9.41668 13.0004 9.19168C12.7135 8.92501 12.5879 8.54168 12.6507 8.14168L12.83 6.95835C12.8748 6.65835 13.0721 6.30001 13.2962 6.09168L16.6225 3.00001C17.9405 1.77501 19.0881 2.47501 19.6619 3.00001C20.2268 3.52501 20.9799 4.59168 19.6619 5.82501L16.3356 8.91668C16.1025 9.13335 15.717 9.30835 15.4032 9.35001L14.1301 9.51668C14.0583 9.52501 13.9866 9.53335 13.9149 9.53335ZM18.1378 3.56668C17.9584 3.56668 17.7971 3.68335 17.5729 3.88335L14.2556 6.97501C14.2287 7.00835 14.1749 7.10001 14.1659 7.14168L13.9866 8.26668L15.2059 8.10835C15.2508 8.10001 15.3494 8.05001 15.3853 8.02501L18.7116 4.93335C19.133 4.54168 19.1957 4.32501 18.7116 3.88335C18.4785 3.66668 18.3081 3.56668 18.1378 3.56668Z"
                    fill="white"
                  />
                  <path
                    d="M18.7116 6.44999C18.6488 6.44999 18.5861 6.44165 18.5323 6.42499C17.304 6.09999 16.3267 5.19999 15.986 4.05832C15.8874 3.72499 16.0936 3.38332 16.4522 3.28332C16.8108 3.19165 17.1784 3.38332 17.286 3.71665C17.5102 4.44165 18.1288 5.01665 18.9088 5.22499C19.2675 5.31665 19.4737 5.66665 19.375 5.99165C19.2764 6.26665 19.0074 6.44999 18.7116 6.44999Z"
                    fill="white"
                  />
                </svg>
                Spend management
                <FaChevronRight className="ml-3" />
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66669 11.1759H15.8334"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8334 9.23428V15.1926C15.8084 17.5676 15.1583 18.1676 12.6833 18.1676H4.81671C2.30004 18.1676 1.66669 17.5426 1.66669 15.0593V9.23428C1.66669 6.98428 2.19169 6.25928 4.16669 6.14261C4.36669 6.13428 4.58338 6.12595 4.81671 6.12595H12.6833C15.2 6.12595 15.8334 6.75095 15.8334 9.23428Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3334 6.27594V12.1009C18.3334 14.3509 17.8084 15.0759 15.8334 15.1926V9.23427C15.8334 6.75094 15.2 6.12594 12.6833 6.12594H4.81671C4.58338 6.12594 4.36669 6.13427 4.16669 6.1426C4.19169 3.7676 4.84171 3.1676 7.31671 3.1676H15.1833C17.7 3.1676 18.3334 3.7926 18.3334 6.27594Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.375 15.5093H5.80831"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.59167 15.5093H10.4583"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Cards
                <FaChevronRight className="ml-3" />
              </a>
            </li>
          </ul>

          {/* divider */}
          <div className="my-5">
            <svg
              width="224"
              height="1"
              viewBox="0 0 224 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.2"
                y1="0.8"
                x2="224"
                y2="0.8"
                stroke="white"
                strokeWidth="0.4"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* footer navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <a className="flex items-center  py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.9583C9.66669 13.9583 9.33335 13.9333 9.01669 13.875C7.25002 13.6167 5.64169 12.6 4.62502 11.0917C3.91669 10.025 3.54169 8.78334 3.54169 7.50001C3.54169 3.94167 6.44169 1.04167 10 1.04167C13.5584 1.04167 16.4584 3.94167 16.4584 7.50001C16.4584 8.78334 16.0834 10.025 15.375 11.0917C14.35 12.6083 12.7417 13.6167 10.9584 13.8833C10.6667 13.9333 10.3334 13.9583 10 13.9583ZM10 2.29167C7.12502 2.29167 4.79169 4.62501 4.79169 7.50001C4.79169 8.54167 5.09169 9.54167 5.65835 10.3917C6.48335 11.6083 7.77502 12.425 9.20835 12.6333C9.74169 12.725 10.2667 12.725 10.7584 12.6333C12.2167 12.425 13.5084 11.6 14.3334 10.3833C14.9 9.53333 15.2 8.53333 15.2 7.49166C15.2084 4.625 12.875 2.29167 10 2.29167Z"
                    fill="white"
                  />
                  <path
                    d="M5.39153 18.825C5.27487 18.825 5.16653 18.8083 5.04987 18.7833C4.5082 18.6583 4.09154 18.2416 3.96654 17.7L3.67487 16.475C3.6582 16.4 3.59987 16.3416 3.51653 16.3166L2.14153 15.9916C1.62487 15.8666 1.21654 15.4833 1.07487 14.975C0.933202 14.4666 1.07487 13.9166 1.44987 13.5416L4.69987 10.2916C4.8332 10.1583 5.01654 10.0916 5.19987 10.1083C5.3832 10.125 5.54987 10.225 5.6582 10.3833C6.4832 11.6 7.77487 12.425 9.21654 12.6333C9.74987 12.725 10.2749 12.725 10.7665 12.6333C12.2249 12.425 13.5165 11.6 14.3415 10.3833C14.4415 10.225 14.6165 10.125 14.7999 10.1083C14.9832 10.0916 15.1665 10.1583 15.2999 10.2916L18.5499 13.5416C18.9249 13.9166 19.0665 14.4666 18.9249 14.975C18.7832 15.4833 18.3665 15.875 17.8582 15.9916L16.4832 16.3166C16.4082 16.3333 16.3499 16.3916 16.3249 16.475L16.0332 17.7C15.9082 18.2416 15.4915 18.6583 14.9499 18.7833C14.4082 18.9166 13.8499 18.725 13.4999 18.3L9.99987 14.275L6.49987 18.3083C6.21654 18.6416 5.81653 18.825 5.39153 18.825ZM5.07487 11.6916L2.3332 14.4333C2.2582 14.5083 2.26654 14.5916 2.2832 14.6416C2.29154 14.6833 2.3332 14.7666 2.4332 14.7833L3.8082 15.1083C4.34987 15.2333 4.76654 15.65 4.89154 16.1916L5.1832 17.4166C5.2082 17.525 5.29153 17.5583 5.34154 17.575C5.39153 17.5833 5.47487 17.5916 5.54987 17.5083L8.74153 13.8333C7.32487 13.5583 6.02487 12.8 5.07487 11.6916ZM11.2582 13.825L14.4499 17.4916C14.5249 17.5833 14.6165 17.5833 14.6665 17.5666C14.7165 17.5583 14.7915 17.5166 14.8249 17.4083L15.1165 16.1833C15.2415 15.6416 15.6582 15.225 16.1999 15.1L17.5749 14.775C17.6749 14.75 17.7165 14.675 17.7249 14.6333C17.7415 14.5916 17.7499 14.5 17.6749 14.425L14.9332 11.6833C13.9749 12.7916 12.6832 13.55 11.2582 13.825Z"
                    fill="white"
                  />
                  <path
                    d="M11.5751 10.7417C11.3584 10.7417 11.1001 10.6833 10.7918 10.5L10.0001 10.025L9.20843 10.4917C8.48343 10.925 8.00843 10.675 7.83343 10.55C7.65843 10.425 7.28343 10.05 7.4751 9.22501L7.6751 8.36668L7.00843 7.74999C6.64176 7.38333 6.50843 6.94168 6.63343 6.54168C6.75843 6.14168 7.1251 5.85833 7.64176 5.775L8.53343 5.62501L8.95843 4.69168C9.2001 4.21668 9.5751 3.95 10.0001 3.95C10.4251 3.95 10.8084 4.22502 11.0418 4.70002L11.5334 5.68334L12.3584 5.78334C12.8668 5.86667 13.2334 6.14999 13.3668 6.54999C13.4918 6.94999 13.3584 7.39167 12.9918 7.75834L12.3001 8.45002L12.5168 9.22501C12.7084 10.05 12.3334 10.425 12.1584 10.55C12.0668 10.625 11.8668 10.7417 11.5751 10.7417ZM8.00843 6.99168L8.58343 7.56666C8.8501 7.83333 8.98343 8.28334 8.9001 8.65001L8.74176 9.31667L9.40843 8.925C9.76676 8.71666 10.2501 8.71666 10.6001 8.925L11.2668 9.31667L11.1168 8.65001C11.0334 8.27501 11.1584 7.83333 11.4251 7.56666L12.0001 6.99168L11.2751 6.86666C10.9251 6.80833 10.5751 6.55001 10.4168 6.23335L10.0001 5.41667L9.58343 6.25001C9.43343 6.55834 9.08343 6.82501 8.73343 6.88335L8.00843 6.99168Z"
                    fill="white"
                  />
                </svg>
                Leaderboard
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99992 18.9667C9.09159 18.9667 8.1916 18.7 7.48327 18.175L3.89992 15.5C2.94992 14.7917 2.20825 13.3167 2.20825 12.1333V5.94167C2.20825 4.65834 3.14993 3.29167 4.35827 2.84167L8.51659 1.28334C9.34159 0.97501 10.6416 0.97501 11.4666 1.28334L15.6333 2.84167C16.8416 3.29167 17.7833 4.65834 17.7833 5.94167V12.1333C17.7833 13.3167 17.0416 14.7917 16.0916 15.5L12.5083 18.175C11.8083 18.7 10.9083 18.9667 9.99992 18.9667ZM8.95826 2.45001L4.79993 4.00833C4.08327 4.275 3.45825 5.17501 3.45825 5.94167V12.1333C3.45825 12.925 4.0166 14.0333 4.6416 14.5L8.22492 17.175C9.18325 17.8917 10.8083 17.8917 11.7666 17.175L15.3499 14.5C15.9833 14.025 16.5333 12.9167 16.5333 12.1333V5.94167C16.5333 5.18334 15.9083 4.28333 15.1916 4.00833L11.0332 2.45001C10.4832 2.24167 9.51659 2.24167 8.95826 2.45001Z"
                    fill="white"
                  />
                  <path
                    d="M9.9999 9.72504C9.98324 9.72504 9.96656 9.72504 9.94156 9.72504C8.73323 9.69171 7.84991 8.76671 7.84991 7.64171C7.84991 6.49171 8.79156 5.55003 9.94156 5.55003C11.0916 5.55003 12.0332 6.49171 12.0332 7.64171C12.0249 8.77504 11.1416 9.69169 10.0166 9.73336C10.0082 9.72502 10.0082 9.72504 9.9999 9.72504ZM9.94156 6.80003C9.4749 6.80003 9.09991 7.17504 9.09991 7.64171C9.09991 8.10004 9.45825 8.46669 9.90825 8.48336C9.90825 8.48336 9.9499 8.48336 9.9999 8.48336C10.4416 8.45836 10.7832 8.09171 10.7832 7.64171C10.7916 7.17504 10.4082 6.80003 9.94156 6.80003Z"
                    fill="white"
                  />
                  <path
                    d="M9.99983 14.4584C9.28316 14.4584 8.55817 14.2667 7.99983 13.8917C7.4415 13.525 7.12482 12.9834 7.12482 12.4084C7.12482 11.8334 7.4415 11.2917 7.99983 10.9167C9.12483 10.1667 10.8832 10.175 11.9998 10.9167C12.5582 11.2834 12.8748 11.825 12.8748 12.4C12.8748 12.975 12.5582 13.5167 11.9998 13.8917C11.4415 14.2667 10.7165 14.4584 9.99983 14.4584ZM8.69149 11.95C8.48315 12.0834 8.36648 12.25 8.37482 12.4C8.37482 12.55 8.49149 12.7167 8.69149 12.85C9.39149 13.3167 10.6082 13.3167 11.3082 12.85C11.5165 12.7167 11.6332 12.55 11.6332 12.4C11.6332 12.25 11.5165 12.0834 11.3165 11.95C10.6165 11.4917 9.39149 11.4917 8.69149 11.95Z"
                    fill="white"
                  />
                </svg>
                Profile & Settings
                <FaChevronRight className="ml-3" />
              </a>
            </li>

            <li className="items-center">
              <a className="flex items-center py-3 rounded-lg" href="#">
                <svg
                  className="mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 12.2917C8.73331 12.2917 7.70831 11.2667 7.70831 10C7.70831 8.73334 8.73331 7.70834 9.99998 7.70834C11.2666 7.70834 12.2916 8.73334 12.2916 10C12.2916 11.2667 11.2666 12.2917 9.99998 12.2917ZM9.99998 8.95834C9.42498 8.95834 8.95831 9.425 8.95831 10C8.95831 10.575 9.42498 11.0417 9.99998 11.0417C10.575 11.0417 11.0416 10.575 11.0416 10C11.0416 9.425 10.575 8.95834 9.99998 8.95834Z"
                    fill="white"
                  />
                  <path
                    d="M16.6669 15.625C16.5336 15.625 16.4086 15.5834 16.2919 15.5C16.0169 15.2917 15.9586 14.9 16.1669 14.625C17.1752 13.2834 17.7086 11.6834 17.7086 10C17.7086 8.3167 17.1752 6.71671 16.1669 5.37504C15.9586 5.10004 16.0169 4.70836 16.2919 4.50002C16.5669 4.29169 16.9586 4.35002 17.1669 4.62502C18.3419 6.18335 18.9586 8.0417 18.9586 10C18.9586 11.9584 18.3419 13.8167 17.1669 15.375C17.0419 15.5417 16.8586 15.625 16.6669 15.625Z"
                    fill="white"
                  />
                  <path
                    d="M3.33335 15.625C3.14169 15.625 2.95835 15.5417 2.83335 15.375C1.65835 13.8167 1.04169 11.9584 1.04169 10C1.04169 8.0417 1.65835 6.18335 2.83335 4.62502C3.04168 4.35002 3.43336 4.29169 3.70836 4.50002C3.98336 4.70836 4.04169 5.10004 3.83336 5.37504C2.82503 6.71671 2.29169 8.3167 2.29169 10C2.29169 11.6834 2.82503 13.2834 3.83336 14.625C4.04169 14.9 3.98336 15.2917 3.70836 15.5C3.60003 15.5834 3.46669 15.625 3.33335 15.625Z"
                    fill="white"
                  />
                  <path
                    d="M14 13.625C13.8667 13.625 13.7417 13.5833 13.625 13.5C13.35 13.2917 13.2917 12.9 13.5 12.625C14.075 11.8667 14.375 10.9583 14.375 9.99999C14.375 9.04166 14.075 8.13333 13.5 7.375C13.2917 7.1 13.35 6.70832 13.625 6.49998C13.9 6.29165 14.2917 6.35 14.5 6.625C15.2334 7.60834 15.625 8.77499 15.625 9.99999C15.625 11.225 15.2334 12.4 14.5 13.375C14.375 13.5416 14.1917 13.625 14 13.625Z"
                    fill="white"
                  />
                  <path
                    d="M6.00001 13.625C5.80834 13.625 5.62501 13.5416 5.50001 13.375C4.76667 12.3916 4.375 11.225 4.375 9.99999C4.375 8.77499 4.76667 7.6 5.50001 6.625C5.70834 6.35 6.09999 6.29165 6.37499 6.49998C6.64999 6.70832 6.70832 7.1 6.49999 7.375C5.92499 8.13333 5.625 9.04166 5.625 9.99999C5.625 10.9583 5.92499 11.8667 6.49999 12.625C6.70832 12.9 6.64999 13.2917 6.37499 13.5C6.26666 13.5833 6.13334 13.625 6.00001 13.625Z"
                    fill="white"
                  />
                </svg>
                Bank performance
                <FaChevronRight className="ml-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
