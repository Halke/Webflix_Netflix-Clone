import React from 'react';
import '../styles/signInFooter.css';

function SignInFooter() {

    return (
        <div className='signin-footer'>
            <table>
                <thead>
                    <tr><td><a href='#'>Questions? Contact us.</a></td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href='#'>Gift Card Terms</a></td>
                        <td><a href='#'>Terms of Use</a></td>
                        <td><a href='#'>Privacy Statement</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default SignInFooter;