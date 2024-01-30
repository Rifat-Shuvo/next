import React from 'react';
import Heading from './Heading';
import Card from './Card';
import popular1 from "../../../public/images/popular1.png";
import popular2 from "../../../public/images/popular2.png";
import popular3 from "../../../public/images/popular3.png";
import popular4  from "../../../public/images/popular4.png";
const Popular = () => {
    return (
        <div className='shadow-lg'>
            <Heading subheading={'Most Rated Books'} heading={'Popular'}></Heading>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gradient-to-br from-green-50 to-green-300 py-36 px-5'>
                <Card src={popular1} title={'Empire of the Mughal'} desc={'Sadequl Ahsan Collol'} link={'https://drive.google.com/file/d/1Dy5F5dVv2sIunq2f6OPqkbpC2L3WSVa_/view?usp=drive_link'}></Card>
                <Card src={popular2} title={'Ekattor and My Father'} desc={'Humayun Ahmed'} link={'https://drive.google.com/file/d/1U8lm2qH-eBxZDNdNgRDymJq_sEyX0Oqq/view?usp=drive_link'}></Card>
                <Card src={popular3} title={'Ekjon Myaboti'} desc={'Humayun Ahmed'} link={'https://drive.google.com/file/d/1I_h7CpnLbo3XXCIvtR8m5L3EKwqACe8Q/view?usp=drive_link'}></Card>
                <Card src={popular4} title={'Gavi Bittanto'} desc={'Ahmed Chofa'} link={'https://drive.google.com/file/d/1pzXOpJBSZkZnOkXC6LqwqxZtxQEb--7-/view?usp=drive_link'}></Card>
            </div>
        </div>

    );
};

export default Popular;