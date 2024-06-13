import React from 'react'
import Layout from './../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Nolcstore, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and safeguard the information you provide to us.
<u>Information We Collect:</u>
- Personal Information: When you make a purchase or create an account on our website, we may collect personal information such as your name, email address, shipping address, and payment details.
- Usage Data: We may also collect non-personal information about how you interact with our website, including your IP address, browser type, and pages visited.
How We Use Your Information:*
- Order Fulfillment
Information Security:
We take reasonable precautions to protect the security of your personal information and prevent unauthorized access, disclosure, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
Third-Party Services:
We may use third-party services, Your privacy is important to us.

Remember to adapt this policy to comply with relevant laws and regulations, and consider consulting with legal professionals if needed.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;