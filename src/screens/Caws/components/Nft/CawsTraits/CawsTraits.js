import React from "react";
import TitleWithParagraph from "../../General/TitleWithParagraph";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import "./_cawsTraits.scss";

const CawsTraits = () => {
  return (
    <div className="caws-traits container-padding">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* to be checked if text on blue cards is static */}
          <div className="col-md-5 d-flex align-items-center justify-content-center position-relative order-2 order-md-1 mt-5 mt-md-0">
            {/* <span className='blur-backgroud-top-left left-0' /> */}
            <img
              src={require("../../../assets/Nft/caw_trait.gif")}
              className="graphics white-gif"
              alt="phone-graphics"
            />
            <img
              src={require("../../../assets/Nft/caw_trait_dark.gif")}
              className="graphics dark-gif"
              alt="phone-graphics"
            />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <TitleWithParagraph>
              <h1 className="text-white">
                <small>ALL THE</small> <br />
                TRAITS
              </h1>
              <p className="mb-2 text-white">
                Discover all the little details that make each cat as smug, cute
                and adoptable as the other. You can easily discover their story
                and personality by checking out their outfit, their expression -
                and of course, <mark>what kind of watch they're into.</mark>
              </p>
              <p className="mb-2 text-white">
                We love all of our cats, but some of their watches make them
                stand out a bit more than others. We'll let you be the judge of
                that.
              </p>
              <div className="pt-5">
                <a
                  className="nft-rarity-button"
                  href="https://rarity.tools/catsandwatchessocietycaws"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_320_1642)">
                      <path
                        d="M0 17.953C0 13.9842 0 10.0154 0 6.04654C0.122384 6.0592 0.079714 5.95557 0.0886232 5.90493C0.630209 2.85517 2.83782 0.648497 5.90727 0.0886232C5.95651 0.079714 6.06248 0.124729 6.04701 0C10.0158 0 13.9846 0 17.9535 0C17.9375 0.124729 18.0435 0.079714 18.0932 0.0886232C21.1627 0.648497 23.3745 2.85939 23.9118 5.90493C23.9208 5.95557 23.8786 6.05873 24.0005 6.04654C24.0005 10.0154 24.0005 13.9842 24.0005 17.953C23.879 17.9413 23.9208 18.0444 23.9118 18.0951C23.3707 21.1444 21.1664 23.3478 18.0937 23.9114C18.0444 23.9203 17.9385 23.8757 17.9539 24C13.9851 24 10.0163 24 6.04748 24C6.06295 23.8757 5.95698 23.9203 5.90774 23.9114C2.83453 23.3478 0.627865 21.1416 0.0886232 18.0946C0.079714 18.0444 0.122384 17.9408 0 17.953ZM17.5258 13.1791C17.5258 12.554 17.5319 11.929 17.5216 11.3044C17.5188 11.1351 17.5732 11.0985 17.7326 11.1004C18.42 11.1088 19.1074 11.0985 19.7949 11.1079C19.9623 11.1103 20.0227 11.0774 20.0204 10.8931C20.0096 10.0496 20.0087 9.20556 20.0209 8.36246C20.0237 8.17209 19.9548 8.15099 19.7934 8.15286C19.114 8.16084 18.4341 8.15005 17.7546 8.16037C17.5751 8.16318 17.5188 8.12145 17.5207 7.93248C17.5314 7.01061 17.5146 6.08874 17.5324 5.16734C17.5375 4.91132 17.455 4.86583 17.222 4.86959C16.3784 4.88318 15.5344 4.88928 14.6913 4.8663C14.4264 4.85927 14.3743 4.96102 14.3471 5.18469C14.2318 6.12156 14.0981 7.05609 13.9809 7.9925C13.965 8.12098 13.9256 8.15568 13.8008 8.16271C13.3648 8.18709 12.9296 8.22976 12.4931 8.25555C12.3472 8.26399 12.2914 8.30995 12.2928 8.46515C12.2999 9.2773 12.3008 10.0899 12.2924 10.9025C12.2905 11.0732 12.3514 11.1117 12.5085 11.107C12.8518 11.0967 13.1964 11.1135 13.5397 11.0999C13.7103 11.0934 13.7436 11.1529 13.7432 11.3114C13.7371 12.5376 13.7389 13.7643 13.7399 14.9909C13.7403 15.5236 13.7966 16.0506 13.9274 16.5674C14.2632 17.8934 15.0261 18.8411 16.3854 19.1909C17.6749 19.5229 18.955 19.3888 20.2141 18.9879C20.3411 18.9475 20.3627 18.8819 20.3364 18.7637C20.1658 17.9952 19.9946 17.2262 19.8352 16.4553C19.8066 16.3179 19.7583 16.2893 19.6331 16.324C19.3682 16.3981 19.0962 16.4155 18.8214 16.4131C18.1626 16.4075 17.7293 16.0661 17.5835 15.4247C17.5418 15.2418 17.523 15.0556 17.5244 14.8667C17.5282 14.304 17.5258 13.7418 17.5258 13.1791ZM7.04672 10.0346C7.02983 10.0294 7.01249 10.0247 6.9956 10.0196C6.91542 9.45877 6.8268 8.89842 6.76021 8.33574C6.74146 8.17537 6.67815 8.1524 6.5403 8.15333C5.65031 8.15849 4.75986 8.1613 3.86988 8.15146C3.69357 8.14958 3.65184 8.196 3.65231 8.37044C3.65793 11.8764 3.6584 15.382 3.65137 18.888C3.6509 19.0859 3.71936 19.114 3.89145 19.1131C4.98447 19.1065 6.07796 19.1037 7.17097 19.1149C7.3862 19.1173 7.44435 19.0591 7.44341 18.843C7.43497 16.9767 7.43825 15.1105 7.43919 13.2447C7.43919 13.1514 7.42418 13.0478 7.45795 12.9667C7.80822 12.1222 8.33527 11.4558 9.27871 11.2378C9.72042 11.1356 10.1663 11.1782 10.6015 11.2744C10.8092 11.3203 10.8636 11.2617 10.9035 11.0699C11.0976 10.1396 11.3039 9.21118 11.514 8.28416C11.5477 8.13505 11.5069 8.07268 11.3663 8.03423C10.7783 7.8734 10.1846 7.81853 9.58537 7.95217C8.60911 8.17021 7.90434 8.77088 7.34681 9.57083C7.24178 9.72182 7.14659 9.87984 7.04672 10.0346Z"
                        fill="#FEFDFD"
                      />
                      <path
                        d="M17.5255 13.179C17.5255 13.7413 17.5278 14.304 17.5241 14.8662C17.5231 15.0551 17.5414 15.2408 17.5832 15.4242C17.729 16.0656 18.1623 16.407 18.8211 16.4126C19.0959 16.415 19.3674 16.3976 19.6328 16.3235C19.758 16.2888 19.8067 16.3174 19.8349 16.4548C19.9943 17.2257 20.1654 17.9947 20.3361 18.7632C20.3624 18.8819 20.3408 18.9471 20.2137 18.9874C18.9542 19.3883 17.6746 19.5224 16.3851 19.1904C15.0253 18.8406 14.2628 17.893 13.9271 16.5669C13.7963 16.0502 13.74 15.5231 13.7395 14.9904C13.7386 13.7638 13.7363 12.5376 13.7428 11.3109C13.7438 11.1524 13.71 11.0924 13.5393 11.0995C13.1961 11.1131 12.8519 11.0962 12.5082 11.1065C12.3511 11.1112 12.2902 11.0727 12.292 10.902C12.3005 10.0899 12.2995 9.27728 12.2925 8.46467C12.2911 8.30946 12.3469 8.26351 12.4927 8.25507C12.9288 8.22928 13.364 8.18661 13.8005 8.16223C13.9252 8.15519 13.9646 8.12049 13.9806 7.99201C14.0978 7.05561 14.2314 6.12108 14.3468 5.18421C14.3744 4.96054 14.426 4.85879 14.691 4.86582C15.534 4.88833 16.3781 4.8827 17.2216 4.8691C17.4547 4.86535 17.5367 4.91083 17.5321 5.16686C17.5142 6.08826 17.5306 7.01059 17.5203 7.93199C17.518 8.12096 17.5747 8.1627 17.7543 8.15988C18.4338 8.14957 19.1137 8.16035 19.7931 8.15238C19.9544 8.1505 20.0234 8.1716 20.0205 8.36198C20.0083 9.20554 20.0093 10.0491 20.0201 10.8927C20.0224 11.0765 19.9624 11.1098 19.7945 11.1074C19.1071 11.0985 18.4197 11.1084 17.7323 11.0999C17.5729 11.098 17.5185 11.1342 17.5213 11.3039C17.5321 11.9289 17.5255 12.554 17.5255 13.179Z"
                        fill="#BD185D"
                      />
                      <path
                        d="M7.04672 10.0346C7.14659 9.87987 7.24131 9.72185 7.34681 9.57086C7.90434 8.77091 8.60911 8.17024 9.58537 7.9522C10.1846 7.81856 10.7783 7.87342 11.3663 8.03425C11.5069 8.0727 11.5477 8.1346 11.514 8.28418C11.3039 9.21121 11.0976 10.1392 10.9035 11.07C10.8636 11.2617 10.8092 11.3203 10.6015 11.2744C10.1663 11.1783 9.71995 11.1356 9.27871 11.2378C8.33527 11.4559 7.80822 12.1222 7.45795 12.9667C7.42418 13.0483 7.43919 13.1514 7.43919 13.2447C7.43825 15.111 7.43497 16.9772 7.44341 18.843C7.44435 19.0592 7.3862 19.1168 7.17098 19.115C6.07796 19.1042 4.98494 19.1065 3.89145 19.1131C3.71936 19.114 3.6509 19.0859 3.65137 18.888C3.6584 15.382 3.65747 11.8765 3.65231 8.37046C3.65184 8.19603 3.69357 8.14961 3.86988 8.15148C4.75986 8.16133 5.65031 8.15851 6.5403 8.15336C6.67862 8.15242 6.74146 8.1754 6.76021 8.33576C6.8268 8.89845 6.91542 9.45832 6.9956 10.0196C7.01295 10.0248 7.02983 10.0294 7.04672 10.0346Z"
                        fill="#BD185D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_320_1642">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  &nbsp; &nbsp; Rarity Tools &nbsp; &nbsp;
                  <ChevronArrowSvg color="white" />
                </a>
              </div>
            </TitleWithParagraph>
          </div>
        </div>
      </div>
      <span className="blur-backgroud-bottom-right bottom--150 right--150" />
    </div>
  );
};

export default CawsTraits;