


import React from 'react';

const PageHeaderContent = (props) => {
    const { headerText, icon } = props;
    return (
        <div className="mb-[40px] mt-[20px] flex items-center gap-[15px]">
            {/* Premium Icon Box */}
            <div className="p-[10px] md:p-[14px] bg-theme-main/10 border border-theme-main/30 rounded-2xl text-theme-main shadow-[0_0_20px_rgba(255,221,64,0.15)]">
                {React.cloneElement(icon, { size: 30 })}
            </div>
            
            {/* Premium Typography with Glowing Underline */}
            <h2 className="text-white text-[3.5rem] md:text-[4.5rem] font-extrabold tracking-[1px] capitalize relative leading-tight">
                {headerText}
                <span className="absolute bottom-[-2px] left-0 w-[60%] h-[4px] bg-theme-main rounded-full shadow-[0_0_15px_rgba(255,221,64,0.8)]"></span>
            </h2>
        </div>
    );
};

export default PageHeaderContent;