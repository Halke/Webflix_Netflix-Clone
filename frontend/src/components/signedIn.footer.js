/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/signedInFooter.css';

function Footer(){
    return (
        <div className='signedin-footer'>
            <table className='signedin-footer-table'>
                <tbody>
                    <tr>
                        <td><a href='#'>Contact Us!</a></td>
                        <td><a href='#'>FAQ</a></td>
                    </tr>
                    <tr className='created-by'>
                        <td>Created By: PraiseTheWeb &copy;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Footer;