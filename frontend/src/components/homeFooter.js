import React from "react";
import "../styles/homeFooter.css";

function HomeFooter() {
  return (
    <div className="home-footer">
      <table>
        <thead>
          <tr>
            <td>
              <a href="/">Questions? Contact us.</a>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/">FAQ</a>
            </td>
            <td>
              <a href="/">Help Center</a>
            </td>
            <td>
              <a href="/">Account</a>
            </td>
            <td>
              <a href="/">Media Center</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">Investor Relations</a>
            </td>
            <td>
              <a href="/">Jobs</a>
            </td>
            <td>
              <a href="/">Ways to Watch</a>
            </td>
            <td>
              <a href="/">Terms of Use</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">Privacy</a>
            </td>
            <td>
              <a href="/">Cookie Preferences</a>
            </td>
            <td>
              <a href="/">Corporate Information</a>
            </td>
            <td>
              <a href="/">Contact Us</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">Speed Test</a>
            </td>
            <td>
              <a href="/">Legal Notices</a>
            </td>
            <td>
              <a href="/">Webflix Originals</a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Netflix Bosnia &amp; Herzegovina</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default HomeFooter;
