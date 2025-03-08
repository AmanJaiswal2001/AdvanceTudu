import React from 'react'

  import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import PieChart from './PieChart'
const Sidebar = () => {
 const user=useSelector((state)=>state.user)
 const isMenuOpen=useSelector((store)=>store.toggle.isMenuOpen)
 const theme = useSelector((state) => state.toggle.theme);
 const tasks = useSelector((state) => state.tudu.tasks);
 const completedTasks = useSelector((state) => state.tudu.completedTasks);

 if(!isMenuOpen) return null;

  return (
   <div className={`w-72 h-screen   ${theme === 'dark' ? 'bg-[#2C2C2C] text-white' : 'bg-[#EEF6EF] text-black' }`} >
   <div className='flex flex-col items-center justify-center'>
    <img src='https://s3-alpha-sig.figma.com/img/333c/2d05/a5f50ecf137e000854b1631514ec0670?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JHtyaW-rIz1ZNXb398ypQsewEilWXZ~k3Fz1xDrfUudR2uCuPMiz7DHCKGx6qdbREVmfDTqZVQUsvqAVWpyPcx-lvXOcTt0Z6wMPvfeYa1Hqyh30mgDv6orE2QBRRx0fHYRSQssZHytVjeEJ7y00PHORIjjp~LpDS~anUM3DCxEqSBhbMX2YFJklGEvKw56tTqJppkLM3MVFTYUvyQrjzLQ6qPmg5WvgErQBp0IBq8qS6e7bZBHklT1HFmUwrJB0WluhlFTHUfZgom3R73InL9FhTuYEtPX1ohdJnRmwE203UxRl12LF7w2Uf814slRc84q77-J2kj7yiR5hgBTv9g__'
    className='w-28 h-28 rounded-full relative -mt-10 z-10'
     alt='profilePic'/>
     <p className='font-medium font-o '>{user.name}</p>
   </div>

   {/* side list */}

   <div className={`w-60  flex flex-col justify-center gap-4 h-60 p-4 m-auto mt-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black' }`}>
<Link to="/dashboard">
<div className='flex items-center w-full gap-2 '>
<svg 
    className="w-6 h-6  stroke-current fill-none dark:text-white">
{/* width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<g clip-path="url(#clip0_5_2218)">
<path d="M7.99809 16.9334H11.9981M7.99809 11.9334H15.9981M7.50009 4.43341C5.94409 4.48041 5.01709 4.65341 4.37509 5.29541C3.49609 6.17541 3.49609 7.59041 3.49609 10.4214V16.9274C3.49609 19.7594 3.49609 21.1744 4.37509 22.0544C5.25309 22.9334 6.66809 22.9334 9.49609 22.9334H14.4961C17.3251 22.9334 18.7391 22.9334 19.6171 22.0534C20.4971 21.1744 20.4971 19.7594 20.4971 16.9274V10.4214C20.4971 7.59141 20.4971 6.17541 19.6171 5.29541C18.9761 4.65341 18.0481 4.48041 16.4921 4.43341" 
 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.49609 4.68341C7.49609 3.71741 8.28009 2.93341 9.24609 2.93341H14.7461C15.2102 2.93341 15.6553 3.11779 15.9835 3.44597C16.3117 3.77416 16.4961 4.21928 16.4961 4.68341C16.4961 5.14754 16.3117 5.59266 15.9835 5.92085C15.6553 6.24904 15.2102 6.43341 14.7461 6.43341H9.24609C8.78197 6.43341 8.33685 6.24904 8.00866 5.92085C7.68047 5.59266 7.49609 5.14754 7.49609 4.68341Z"  
stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5_2218">
<rect width="24" height="24" fill="none" transform="translate(0 0.933411)"/>
</clipPath>
</defs>
</svg>
<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>All Tasks</span>
</div>
</Link>
{/* today */}
<Link to="/dashboard">
<div className='flex items-center w-full gap-2 '>
<svg 
     className="w-6 h-6  stroke-current fill-none dark:text-white">
     {/* className={`${theme === 'dark' ? ' text-[#FFFFFF]' : '' }`} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<path d="M19 8.93341H1M14 0.933411V4.93341M6 0.933411V4.93341M5.8 20.9334H14.2C15.8802 20.9334 16.7202 20.9334 17.362 20.6064C17.9265 20.3188 18.3854 19.8599 18.673 19.2954C19 18.6536 19 17.8136 19 16.1334V7.73341C19 6.05325 19 5.21317 18.673 4.57144C18.3854 4.00695 17.9265 3.54801 17.362 3.26039C16.7202 2.93341 15.8802 2.93341 14.2 2.93341H5.8C4.11984 2.93341 3.27976 2.93341 2.63803 3.26039C2.07354 3.54801 1.6146 4.00695 1.32698 4.57144C1 5.21317 1 6.05325 1 7.73341V16.1334C1 17.8136 1 18.6536 1.32698 19.2954C1.6146 19.8599 2.07354 20.3188 2.63803 20.6064C3.27976 20.9334 4.11984 20.9334 5.8 20.9334Z"
  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>Today</span>
</div>
</Link>
<Link to="/important">
<div className='flex items-center w-full gap-2 '>
<svg 
  className="w-6 h-6  stroke-current fill-none dark:text-white">
{/* width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<g clip-path="url(#clip0_5_2229)">
<path d="M22.4225 10.0514C22.3287 9.76315 22.1517 9.50909 21.9138 9.32124C21.6759 9.13339 21.3877 9.02015 21.0856 8.99578L15.5543 8.54953L13.4187 3.38484C13.3032 3.10342 13.1066 2.8627 12.854 2.69328C12.6013 2.52387 12.304 2.43341 11.9998 2.43341C11.6956 2.43341 11.3983 2.52387 11.1456 2.69328C10.893 2.8627 10.6964 3.10342 10.5809 3.38484L8.44714 8.54859L2.91308 8.99578C2.61043 9.02138 2.32207 9.13572 2.08412 9.32447C1.84617 9.51323 1.66921 9.76801 1.57542 10.0569C1.48163 10.3458 1.47517 10.6559 1.55686 10.9485C1.63855 11.241 1.80475 11.5029 2.03464 11.7014L6.25339 15.3417L4.96808 20.7848C4.8962 21.0806 4.9138 21.391 5.01865 21.6767C5.1235 21.9623 5.31087 22.2104 5.55698 22.3894C5.80309 22.5685 6.09684 22.6703 6.40093 22.6821C6.70503 22.6938 7.00576 22.6149 7.26496 22.4555L11.9993 19.5417L16.7365 22.4555C16.9958 22.6131 17.2959 22.6904 17.5991 22.6778C17.9022 22.6651 18.1949 22.5631 18.4401 22.3845C18.6854 22.2058 18.8724 21.9586 18.9774 21.674C19.0825 21.3894 19.101 21.08 19.0306 20.7848L17.7406 15.3408L21.9593 11.7005C22.1911 11.5023 22.3588 11.2398 22.4412 10.9462C22.5237 10.6527 22.5172 10.3413 22.4225 10.0514ZM20.9843 10.5642L16.4187 14.5017C16.3146 14.5915 16.2371 14.7081 16.1948 14.8389C16.1525 14.9697 16.1469 15.1096 16.1787 15.2433L17.5737 21.1308C17.5773 21.1389 17.5777 21.1481 17.5747 21.1565C17.5717 21.1648 17.5657 21.1717 17.5578 21.1758C17.5409 21.1889 17.5362 21.1861 17.5221 21.1758L12.3921 18.0211C12.274 17.9485 12.138 17.91 11.9993 17.91C11.8606 17.91 11.7247 17.9485 11.6065 18.0211L6.47652 21.1777C6.46246 21.1861 6.45871 21.1889 6.44089 21.1777C6.43298 21.1736 6.42692 21.1667 6.42395 21.1583C6.42099 21.15 6.42135 21.1408 6.42496 21.1327L7.81996 15.2452C7.85175 15.1114 7.84618 14.9715 7.80385 14.8407C7.76153 14.71 7.68407 14.5933 7.57996 14.5036L3.01433 10.5661C3.00308 10.5567 2.99277 10.5483 3.00214 10.5192C3.01152 10.4902 3.01902 10.4939 3.03308 10.492L9.02558 10.0083C9.16303 9.99649 9.29456 9.94702 9.40571 9.86531C9.51686 9.78361 9.60332 9.67282 9.65558 9.54516L11.9637 3.95672C11.9712 3.94078 11.974 3.93328 11.9965 3.93328C12.019 3.93328 12.0218 3.94078 12.0293 3.95672L14.3431 9.54516C14.3958 9.67287 14.4828 9.78353 14.5945 9.86493C14.7062 9.94632 14.8382 9.99528 14.9759 10.0064L20.9684 10.4902C20.9825 10.4902 20.9909 10.4902 20.9993 10.5173C21.0078 10.5445 20.9993 10.5548 20.9843 10.5642Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_5_2229">
<rect width="24" height="24" fill="white" transform="translate(0 0.933411)"/>
</clipPath>
</defs>
</svg>

<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>Important</span>
</div>
</Link>
<div className='flex items-center w-full gap-2 '>
<svg 
  className="w-6 h-6  stroke-current fill-none dark:text-white">
{/* width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<g clip-path="url(#clip0_5_2234)">
<path d="M23.25 6.93341C23.25 6.63341 23.1 6.40841 22.875 6.25841L17.625 3.25841C17.475 3.18341 17.4 3.18341 17.25 3.18341C17.1 3.18341 17.025 3.18341 16.875 3.25841L12 6.03341L7.125 3.25841C6.975 3.18341 6.9 3.18341 6.75 3.18341C6.6 3.18341 6.525 3.18341 6.375 3.25841L1.125 6.25841C0.9 6.40841 0.75 6.63341 0.75 6.93341V21.9334C0.75 22.3834 1.05 22.6834 1.5 22.6834C1.65 22.6834 1.725 22.6084 1.875 22.6084L6.75 19.8334L11.625 22.6084C11.775 22.6834 11.85 22.6834 12 22.6834C12.15 22.6834 12.225 22.6834 12.375 22.6084L17.25 19.8334L22.125 22.6084C22.2 22.6834 22.35 22.6834 22.5 22.6834C22.95 22.6834 23.25 22.3834 23.25 21.9334V6.93341ZM2.25 7.38341L6 5.20841V18.4834L2.25 20.6584V7.38341ZM11.25 20.6584L7.5 18.4834V5.20841L11.25 7.38341V20.6584ZM16.5 18.4834L12.75 20.6584V7.38341L16.5 5.20841V18.4834ZM18 18.4834V5.20841L21.75 7.38341V20.6584L18 18.4834Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_5_2234">
<rect width="24" height="24" fill="white" transform="translate(0 0.933411)"/>
</clipPath>
</defs>
</svg>

<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>Planned</span>
</div>


<div className='flex items-center w-full gap-2 '>
<svg 
  className="w-6 h-6  stroke-current fill-none dark:text-white">
{/* width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<path d="M14.8487 16.593C17.2577 16.593 19.2173 14.6334 19.2173 12.2256C19.2173 9.81544 17.2571 7.85584 14.8487 7.85584C12.4397 7.85584 10.4795 9.81604 10.4795 12.2256C10.4795 14.6334 12.4397 16.593 14.8487 16.593ZM14.8487 8.57464C15.8163 8.57607 16.7437 8.96118 17.4277 9.6455C18.1117 10.3298 18.4964 11.2575 18.4973 12.225C18.4962 13.1923 18.1114 14.1196 17.4274 14.8035C16.7434 15.4875 15.816 15.8721 14.8487 15.873C13.8814 15.8721 12.9539 15.4875 12.2698 14.8036C11.5857 14.1197 11.2008 13.1924 11.1995 12.225C11.2001 10.2126 12.8369 8.57464 14.8487 8.57464ZM22.8269 20.7282C22.6355 17.3178 19.5371 17.109 19.4861 17.1072L10.1909 17.1078C10.1597 17.109 7.06071 17.3184 6.86991 20.748V23.3328C6.86991 23.4283 6.90784 23.5199 6.97535 23.5874C7.04286 23.6549 7.13443 23.6928 7.22991 23.6928H22.4669C22.5624 23.6928 22.654 23.6549 22.7215 23.5874C22.789 23.5199 22.8269 23.4283 22.8269 23.3328V20.7282ZM22.1075 22.9728H7.59051L7.58991 20.7678C7.74351 18.0108 10.1303 17.832 10.2107 17.8266L19.4651 17.826C19.5665 17.8326 21.9527 18.0114 22.1069 20.748L22.1075 22.9728ZM7.57071 12.2988H7.57311C8.31291 12.2934 8.95371 12.0282 9.47751 11.5092C10.0019 10.9854 10.2671 10.3446 10.2671 9.60364C10.2671 8.85904 10.0013 8.21704 9.47751 7.69744C8.95311 7.17364 8.31231 6.90784 7.57191 6.90784C6.82731 6.90784 6.18531 7.17364 5.66691 7.69684C5.14251 8.21704 4.87671 8.85904 4.87671 9.60364C4.87671 10.344 5.14251 10.9854 5.66631 11.5086C6.18591 12.0282 6.82611 12.294 7.57071 12.2988ZM5.98611 8.01544C6.42411 7.57324 6.94371 7.35784 7.57251 7.35784C8.19771 7.35784 8.71731 7.57324 9.16071 8.01724C9.60291 8.45524 9.81831 8.97484 9.81831 9.60424C9.81831 10.23 9.60291 10.749 9.16071 11.1906C8.71851 11.6292 8.19831 11.8452 7.57251 11.85C6.94251 11.8452 6.42291 11.6304 5.98491 11.1912C5.54211 10.7496 5.32671 10.23 5.32671 9.60424C5.32671 8.97424 5.54211 8.45524 5.98611 8.01544Z" fill="black"/>
<path d="M7.22299 10.6234C7.26363 10.6591 7.3159 10.6787 7.36999 10.6786C7.40217 10.6785 7.43396 10.6716 7.46324 10.6582C7.49252 10.6449 7.51862 10.6255 7.53979 10.6012L9.06319 8.85522C9.10233 8.81027 9.12202 8.75161 9.11791 8.69214C9.1138 8.63267 9.08624 8.57727 9.04129 8.53812C8.99633 8.49898 8.93767 8.47929 8.8782 8.4834C8.81873 8.48751 8.76333 8.51507 8.72419 8.56002L7.34839 10.1368L6.67159 9.55182C6.64929 9.53252 6.62341 9.5178 6.59542 9.50849C6.56743 9.49919 6.53788 9.49549 6.50847 9.49761C6.47905 9.49973 6.45033 9.50762 6.42397 9.52083C6.3976 9.53405 6.37409 9.55232 6.35479 9.57462C6.33548 9.59692 6.32076 9.6228 6.31146 9.65079C6.30216 9.67878 6.29846 9.70833 6.30058 9.73775C6.30269 9.76716 6.31058 9.79588 6.3238 9.82224C6.33701 9.84861 6.35529 9.87212 6.37759 9.89142L7.22299 10.6234ZM12.0776 6.81342C12.0776 6.81342 12.182 6.66342 12.4484 6.57342C12.6542 6.50382 12.7856 6.48282 12.7856 6.48282V4.73142C12.7856 4.27062 12.4448 3.87102 11.9252 3.87102H10.6088V4.57902H12.0776V6.81342ZM5.39539 5.60922H9.73999C9.96199 5.60922 10.1702 5.45322 10.1702 5.17062V4.14342C10.1702 3.75222 9.85879 3.43242 9.46819 3.43242H9.30139C9.10819 2.68242 8.37499 2.13342 7.56319 2.13342C6.75139 2.13342 6.01819 2.68242 5.82559 3.43242H5.66719C5.27659 3.43242 4.95679 3.75222 4.95679 4.14342V5.17062C4.95679 5.42502 5.14219 5.60922 5.39539 5.60922ZM7.56319 3.00222C8.04439 3.00222 8.43199 3.38982 8.43199 3.87102C8.43199 4.35222 8.04439 4.73982 7.56319 4.73982C7.44903 4.74006 7.33595 4.71775 7.23043 4.67417C7.12492 4.6306 7.02905 4.56661 6.94832 4.48589C6.8676 4.40516 6.80361 4.30929 6.76004 4.20378C6.71646 4.09826 6.69415 3.98518 6.69439 3.87102C6.69439 3.38982 7.08199 3.00222 7.56319 3.00222Z" fill="black"/>
<path d="M9.57113 14.4679H3.05753V4.57873H4.52633V3.87073H3.21053C2.74973 3.87073 2.35913 4.26973 2.35913 4.73113V14.3239C2.35913 14.7847 2.74973 15.1663 3.21053 15.1663H10.2473C10.2473 15.1669 9.71453 14.9461 9.57113 14.4679Z" fill="black"/>
</svg>

<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>Assigned to me </span>
</div>


   </div>

{/* add list */}

<div className={`w-60 bg-[#FBFDFC] flex flex-col  gap-4 h-24 p-4 items-center justify-center m-auto mt-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black' }`}>


<div className='flex items-center  w-full gap-2 '>
<svg
  className="w-6 h-6  stroke-current fill-none dark:text-white">
 {/* width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<g clip-path="url(#clip0_5_2249)">
<path d="M11.1667 13.7667H2V12.1001H11.1667V2.93341H12.8333V12.1001H22V13.7667H12.8333V22.9334H11.1667V13.7667Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_5_2249">
<rect width="24" height="24" fill="white" transform="translate(0 0.933411)"/>
</clipPath>
</defs>
</svg>
<span className={`font-medium text-sm leading-5${theme === 'dark' ? ' text-white' : ' text-black' }`}>Add list</span>
</div>




</div>

<div className={`w-60 bg-[#FBFDFC] flex flex-col   h-72    m-auto mt-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black' }`}>


<div className='flex flex-col p-2 w-full gap-1 border-b border-[#F0F0F0] h-20 '>
<div className='flex justify-between items-center  w-full gap-2 '>
<p className='font-medium'>Today Tasks</p>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.75532" cy="8.52503" r="7.97749" fill="#BDBDBD"/>
<rect x="7.42554" y="6.75226" width="2.65916" height="7.09109" rx="1.32958" fill="white"/>
<rect x="7.42554" y="3.2067" width="2.65916" height="2.65916" rx="1.32958" fill="white"/>
</svg>
</div>
<p>{tasks.length + completedTasks.length}</p>

<PieChart/>
</div>






</div>

   </div>
  )
}

export default Sidebar