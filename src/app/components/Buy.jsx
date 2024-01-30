import React from 'react';
import Heading from './Heading';
import Card from './Card';
import book1 from "../../../public/images/book1.png";
import book2 from "../../../public/images/book2.png";
import book3 from "../../../public/images/book3.png";
const Buy = () => {
    return (
        <div>
            <Heading subheading={'Do not Feel Easy in Pdf?'} heading={'Shop Now'}></Heading>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 bg-gradient-to-br from-green-50 to-green-300 py-36 px-5'>
                <Card src={book1} title={'Fera'} desc={'Humayun Ahmed'} link={'https://drive.google.com/file/d/1grlOxw89fIaq9ce0HDL9rLMNiynw9lAZ/view?usp=drive_link'}/>
                <Card src={book2} title={'Hossey Hobey'} desc={'Tarapodo Ray'} link={'https://drive.google.com/file/d/1MYSgieiFct_juawJLLPRsGraxIbon6Kt/view?usp=drive_link'}/>
                <Card src={book3} title={'Ibn Botutar sofor'} desc={'Md. Nasir Ali'} link={'https://drive.google.com/file/d/1vJsiYiMagP_BTaSd1xnidMrhrBv1WFYH/view?usp=drive_link'}/>
            </div>
        </div>
    );
};

export default Buy;