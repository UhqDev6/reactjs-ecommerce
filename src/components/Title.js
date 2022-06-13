import React, { Component } from 'react';

export default function Title({name,title}) {
    //Prop Berfungsi untuk mengirim sebuah data ke component yang lain
    //state berfungsi untuk menyimpan data yang akan ditampilkan di component
        return (
            <div className='row'>
                <div className='col-10 mx-auto my-2 text-center text-title'>
                    <h1 className='text-capitalize font-weight'>
                        {name} <strong className='text-blue text-title'>{title}</strong>
                    </h1>
                </div>
            </div>
        );
}
