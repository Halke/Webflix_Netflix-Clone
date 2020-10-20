import React from "react";
import "../styles/signInFooter.css";

function SignInFooter() {
  return (
    <div className="signin-footer">
      <table>
        <thead>
          <tr>
            <td>
              <a href="/signin">Questions? Contact us.</a>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/signin">Gift Card Terms</a>
            </td>
            <td>
              <a href="/signin">Terms of Use</a>
            </td>
            <td>
              <a href="/signin">Privacy Statement</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignInFooter;
