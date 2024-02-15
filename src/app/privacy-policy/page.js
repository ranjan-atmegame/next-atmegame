import CardContainer from "@/components/ui/card/CardContainer";
import { getRobot } from "../server";
import CardHeader from "@/components/ui/card/CardHeader";
import Card from "@/components/ui/card/Card";
import styles from "./privacyPolicy.module.css";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/privacy-policy";

  return {
    title: "Privacy Policy - Atmegame.com",
    description:
      "Discover how Atmegame's Privacy Policy enhances your perfect online gaming experience. Play games directly with us!",
    keywords: ["privacy polcity", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function PrivacyPolicy() {
  return (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          slug={``}
          title={`PRIVACY POLICY`}
          isMoreBtn={false}
          iconName={``}
        />
      }
    >
      <Card cardColor="noShadow">
        <section>
          <div className={styles.wrapper}>
            <div>
              <h1>
                PRIVACY POLICY{" "}
                <span className="last-modified">
                  Effective on 25th May 2018
                </span>
              </h1>
              <p>
                We, Apay Marketing Pvt. Ltd. (hereinafter referred to as the
                “Company”) having its registered office at New Delhi,
                represented by its members, where such expression shall, unless
                repugnant to the context thereof, be deemed to include its
                respective legal heirs, representatives, administrators,
                permitted successors and assigns. The creator of this Privacy
                Policy ensures steady commitment to Your privacy with regard to
                the protection of your invaluable information. This privacy
                policy contains information about an online website called
                www.atmegame.com (hereinafter referred to as the “Website”). In
                order to provide You with Our uninterrupted use of services, We
                may collect and, in some circumstances, disclose information
                about you with your permission. To ensure better protection of
                Your privacy, We provide this notice explaining Our information
                collection and disclosure policies, and the choices You make
                about the way Your information is collected and used.
                <br />
                <br />
                This Privacy Policy shall be in compliance with the General Data
                Protection Regulation (GDPR) in effect from May 25, 2018 and any
                and all provisions that may read to the contrary shall be deemed
                to be void and unenforceable as of that date. If you do not
                agree with the terms and conditions of our Privacy Policy,
                including in relation to the manner of collection or use of your
                information, please do not use or access the Site. If you have
                any questions or concerns regarding this Privacy Policy, you
                should contact our Customer Support Desk at{" "}
                <a href="mailto:info@atmegame.com">info@atmegame.com</a>
                <br />
                <br />
                ANY CAPITALIZED WORDS USED HENCEFORTH SHALL HAVE THE MEANING
                ACCORDED TO THEM UNDER THIS AGREEMENT. FURTHER, ALL HEADING USED
                HEREIN ARE ONLY FOR THE PURPOSE OF ARRANGING THE VARIOUS
                PROVISIONS OF THE AGREEMENT IN ANY MANNER. NEITHER THE USER NOR
                THE CREATERS OF THIS PRIVACY POLICY MAY USE THE HEADING TO
                INTERPRET THE PROVISIONS CONTAINED WITHIN IT IN ANY MANNER.
              </p>

              <div className={styles.sitckyMenu}>
                <div className={styles.sitckyLinks}>
                  <ul className={styles.grayBox}>
                    <li>
                      <a href="#definitions" title="">
                        1. DEFINITIONS
                      </a>
                    </li>
                    <li>
                      <a href="#information" title="">
                        2. INFORMATION WE COLLECT
                      </a>
                    </li>
                    <li>
                      <a href="#login-system" title="">
                        3. LOGIN SYSTEM
                      </a>
                    </li>
                    <li>
                      <a href="#your-information" title="">
                        4. OUR USE OF YOUR INFORMATION
                      </a>
                    </li>
                    <li>
                      <a href="#information-collected" title="">
                        5. HOW INFORMATION IS COLLECTED
                      </a>
                    </li>
                    <li>
                      <a href="#cookies" title="">
                        6. COOKIES
                      </a>
                    </li>
                    <li>
                      <a href="#analytics" title="">
                        7. GOOGLE ANALYTICS
                      </a>
                    </li>
                    <li>
                      <a href="#external-website" title="">
                        8. EXTERNAL LINKS ON THE WEBSITE
                      </a>
                    </li>
                    <li>
                      <a href="#your-rights" title="">
                        9. YOUR RIGHTS
                      </a>
                    </li>
                    <li>
                      <a href="#confidentiality" title="">
                        10. CONFIDENTIALITY
                      </a>
                    </li>
                    <li>
                      <a href="#information-collector" title="">
                        11. OTHER INFORMATION COLLECTORS
                      </a>
                    </li>
                    <li>
                      <a href="#disclosure" title="">
                        12. OUR DISCLOSURE OF YOUR INFORMATION
                      </a>
                    </li>
                    <li>
                      <a href="#review-profile" title="">
                        13. ACCESSING, REVIEWING AND CHANGING YOUR PROFILE
                      </a>
                    </li>
                    <li>
                      <a href="#control-password" title="">
                        14. CONTROL OF YOUR PASSWORD
                      </a>
                    </li>
                    <li>
                      <a href="#security" title="">
                        15. SECURITY
                      </a>
                    </li>
                    <li>
                      <a href="#severability" title="">
                        16. SEVERABILITY
                      </a>
                    </li>
                    <li>
                      <a href="#amendment" title="">
                        17. AMENDMENT
                      </a>
                    </li>
                    <li>
                      <a href="#automated-decision" title="">
                        18. AUTOMATED DECISION MAKING
                      </a>
                    </li>
                    <li>
                      <a href="#consent-withdrawal" title="">
                        19. CONSENT WITHDRAWAL, DATA DOWNLOAD & DATA REMOVAL
                        REQUESTS
                      </a>
                    </li>
                    <li>
                      <a href="#contact-us" title="">
                        20. CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.staticContentBox}>
                  <ul>
                    <li id="definitions">
                      <h2>1. DEFINITIONS </h2>
                      <p>
                        “We”, “Our”, and “Us” shall mean and refer to the
                        creators of this privacy policy.
                        <br /> “You”, “Your”, “Yourself” and “User” shall mean
                        and refer to natural and legal individuals who use the
                        Website.
                        <br /> “Personal Information” shall mean and refer to
                        any personally identifiable information that We may
                        collect from You. For removal of any doubts, please
                        refer to Clause 2.
                        <br /> “Third Parties” refer to any website, company or
                        individual apart from the User and the creator of this
                        Website.
                      </p>
                    </li>
                    <li id="information">
                      <h2>2. INFORMATION WE COLLECT</h2>
                      <p>
                        We are committed to respecting Your online privacy. We
                        further recognize Your need for appropriate protection
                        and management of any Personal Information You share
                        with us. We may collect the following information:
                        <br />
                        <br />
                        Personal data such as, but not limited to, Name,
                        Location, Password, Email ID, high scores, game rankings
                        game challenges, avatars, etc. Tracking Information such
                        as, but not limited to the IP address of your device and
                        Device ID when connected to the Internet. [This
                        information may include the URL that you just came from
                        (whether this URL is on the Website or not), which URL
                        you next go to (whether this URL is on the Website or
                        not), your computer browser information, and other
                        information associated with your interaction with the
                        Site.] This privacy policy also applies to data we
                        collect from users who are not registered as members of
                        this site, including, but not limited to, browsing
                        behaviour, pages viewed etc. We also collect and store
                        personal information provided by you from time to time
                        on the Site. We only collect and use such information
                        from you that we consider necessary for achieving a
                        seamless, efficient and safe experience, customized to
                        your needs including:
                        <br />
                        <br />
                        To enable the provision of services opted for by you;
                        <br />
                        To communicate necessary account and service related
                        information from time to time;
                        <br />
                        To allow you to receive quality customer care services;
                        <br />
                        To comply with applicable laws, rules and regulations
                        <br />
                        Where any service requested by you involves a third
                        party, such information as is reasonably necessary by
                        the Company to carry out your service request may be
                        shared with such third party.
                        <br />
                        <br />
                        We also do use your contact information to send you
                        offers based on your interests and prior activity. The
                        Company may also use contact information internally to
                        direct its efforts for service improvement, but shall
                        immediately delete all such information upon withdrawal
                        of your consent for the same through our "unsubscribe"
                        button or through an email to be sent to{" "}
                        <a href="mailto:info@atmegame.com">info@atmegame.com</a>
                        .
                        <br />
                        <br />
                        We collect and store your search details on the Website,
                        including your search history, the usage of the website
                        and the features and time you have used the website for.
                        Further, you may from time to time choose to provide
                        payment related financial information (credit card,
                        debit card, bank account details, billing address etc.)
                        on the Site. We are committed to keeping all such
                        sensitive data/information safe at all times and ensure
                        that such data/information is only transacted over
                        secure Site of approved payment gateways which are
                        digitally encrypted, and provide the highest possible
                        degree of care available under the technology presently
                        in use. We shall collect and store all such information
                        in our internal Company servers for a finite period
                        time, as long as you are a User of the Website, and
                        shall immediately delete all such information upon
                        expiry of your Usership. We shall also delete all
                        aforementioned communication you upon withdrawal of
                        Usership of any single Party to the communication. The
                        Company will not use your financial information for any
                        purpose other than to complete a transaction with you.
                        To the extent possible, we provide you the option of not
                        divulging any specific information that you wish for us
                        not to collect, store or use. You may also choose not to
                        use a particular service or feature on the Site, and opt
                        out of any non-essential communications from the
                        Website.
                        <br />
                        <br />
                        Further, transacting over the internet has inherent
                        risks which can only be avoided by you following
                        security practices yourself, such as not revealing
                        account/login related information to any other person
                        and informing our customer care team about any
                        suspicious activity or where your account has/may has
                        been compromised.
                        <br />
                        <br />
                        At every stage prior to, during or after information
                        collection, you have the right to access all personally
                        identifiable information provided, rectify or alter all
                        personally identifiable information provided, restrict
                        the level of information to be retained as per your sole
                        discretion and object to the retention, use and
                        potential disclosure of the personally identifiable
                        information.
                      </p>
                    </li>
                    <li id="login-system">
                      <h2>3. LOGIN SYSTEM</h2>
                      <p>
                        We use our own login system and facebook login system.
                        We are incorporated and headquartered in India. However,
                        Our login system is hosted by servers in the India.
                        Personal information may be accessed by Us or
                        transferred to Us in the India or to Our affiliates,
                        business partners or service providers located elsewhere
                        in the world. By providing Us with information We
                        receive about You, You consent to such transfer. We will
                        use our best endeavors to protect the privacy and
                        security of this information according to Our Privacy
                        Policy, regardless of where it is processed or stored.
                      </p>
                    </li>
                    <li id="your-information">
                      <h2>4. OUR USE OF YOUR INFORMATION</h2>
                      <p>
                        The information provided by You shall be used to
                        <br />
                        <br />
                        Contact You when necessary and is also used for targeted
                        marketing campaigns i.e. email marketing, remarketing,
                        look alike campaigns etc., to conduct surveys, learn
                        more about You by linking Your data with additional data
                        through third-party data providers or analyzing the data
                        with the help of analytics service providers; Improve
                        and develop new products, services, and features; c.
                        Analyze purchase, usage and traffic data. For more
                        details about the nature of such communications, please
                        refer to our Terms of Service. Further, Your personal
                        data and Sensitive Personal data may be collected and
                        stored by Us for internal record.
                        <br />
                        <br />
                        We use Your tracking information such as IP addresses,
                        and or Device ID to help identify you and to gather
                        broad demographic information. We will not sell, license
                        or trade Your personal information. We will not share
                        your personal information with others unless they are
                        acting under our instructions or we are required to do
                        so by law. Information collected via Our server logs
                        includes users IP addresses and the pages visited; this
                        will be used to manage the web system and troubleshoot
                        problems. We also use third-party analytics, tracking,
                        optimization and targeting tools to understand how users
                        engage with our website so that we can improve it and
                        cater personalized content/ads according to their
                        preferences.
                      </p>
                    </li>
                    <li id="information-collected">
                      <h2>5. HOW INFORMATION IS COLLECTED</h2>
                      <p>
                        Before or at the time of collecting personal
                        information, we will identify the purposes for which
                        information is being collected. If the same is not
                        identified to you, you have the right to request the
                        Company to elucidate the purpose of collection of said
                        personal information, pending fulfilment of which you
                        shall not be mandated to disclose any information
                        whatsoever.
                        <br />
                        <br />
                        We will collect and use your personal information solely
                        with the objective of fulfilling those purposes
                        specified by us, within the scope of consent of the
                        individual concerned or as required by law. We will only
                        retain personal information as long as necessary for the
                        fulfilment of those purposes. We will collect personal
                        information by lawful and fair means and with the
                        knowledge and consent of the individual concerned.
                        <br />
                        <br />
                        Personal data should be relevant to the purposes for
                        which it is to be used, and, to the extent necessary for
                        those purposes, should be accurate, complete, and
                        up-to-date.
                      </p>
                    </li>
                    <li id="cookies">
                      <h2>6. COOKIES</h2>
                      <p>
                        We use data collection devices such as “cookies” on
                        certain pages of our Websites. “Cookies” are small files
                        sited on your hard drive that assist us in providing
                        customized services. We also offer certain features that
                        are only available through the use of a “cookie”.
                        Cookies can also help us provide information, which is
                        targeted to your interests. Cookies may be used to
                        identify logged in or registered users. Our Website uses
                        session cookies to ensure that you have a good
                        experience. These cookies contain a unique number, your
                        "session ID" , which allows our server to recognize your
                        computer and "remember" what you have done on the site.
                        The benefits of this are:
                        <br />
                        <br />
                        You only need to log in once if you are navigating
                        secure areas of the site Our server can distinguish
                        between your computer and other users, so you can see
                        the information that you have requested.
                        <br />
                        <br />
                        You can choose to accept or decline cookies by modifying
                        your browser settings if you prefer. This may prevent
                        you from taking full advantage of the Website. We also
                        use various third-party cookies for usage, behavioural,
                        analytics and preferences data. The following are the
                        different types of Cookies used on the Website:
                      </p>
                      <br />
                      <strong>Authentication cookies</strong> <br /> To identify
                      the user and share the content that he or she requested
                      for.
                      <br />
                      <br /> <strong>Functionality cookies</strong> <br />
                      For customized user experience and resuming past course
                      progress.
                      <br />
                      <br />{" "}
                      <strong>
                        Tracking, optimization and targeting cookies
                      </strong>{" "}
                      <br /> To capture usage metric on device, operating
                      system, browser etc. To capture behavioral metrics for
                      better content delivery. To cater and suggest most suited
                      products and services.
                      <br />
                      <br /> <strong>Performance</strong> <br /> We use these
                      cookies in order your experience on our website and
                      performance. These cookies Collect information about how
                      our website used, for example which pages you visited more
                      often and where error came. Such data not give any
                      personal details.
                      <br />
                      <br /> <strong>Security and integrity</strong> <br />{" "}
                      These cookies help us to keep our website safe and secure,
                      for example the help us to protect us from your
                      unauthorized access or unauthorized alteration, disclosure
                      or destruction of information we hold.
                      <br />
                      <br /> <strong>Third Party Cookies</strong> <br /> We use
                      number of third party services that they may also set
                      cookies on our behalf when you visit our websites to allow
                      them to deliver the services they are providing, for
                      example we are using we are using third party cookies for
                      statistical purposes. More information about these cookies
                      are available on the corresponding third party website.
                      <br />
                      <br />
                      We use two types of cookies - <br /> <br />
                      <strong>1. Session cookies</strong> <br /> These are
                      temporary cookie files which are erased when You close
                      Your browser.
                      <br />
                      <br />
                      <strong>2. Persistent cookies</strong> <br /> These stay
                      in one of Your browser sub-folders until You erase them or
                      they expire.
                      <strong>How can I control or disable cookies?</strong>
                      <p>
                        You may disable or clear cookies anytime. Please beware
                        that because cookies are used throughout Our Websites,
                        disabling or clearing cookies may prevent You from using
                        certain parts of Our Websites and Services. If you are
                        using Google Chrome, to disable cookies: Go to "Tools
                        Menu"
                        <br />
                        Click on "Options"
                        <br />
                        Click on "Under the Hood"
                        <br />
                        "Cookie Setting" should be selected. Once done select
                        "Block all Cookies"
                        <br />
                        Now all cookies should be blocked on your Google Chrome
                      </p>
                      <p>
                        <br /> <strong> To clear existing cookies:</strong>
                        <br />
                        Go to "Tools Menu"
                        <br />
                        Click on "Options"
                        <br />
                        Click on "Under the Hood"
                        <br />
                        Under "Privacy" section select "Show Cookies"
                        <br />A new window should open called "Cookies" In here
                        you can see all the cookies within your Google Chrome
                        Browser.
                        <br />
                        Click on "Remove All" to remove all traces of cookies
                        <br />
                        If you wish to only remove a certain cookie, simply
                        highlight and click "Remove"
                        <br />
                        <br />
                        <strong>Other browsers </strong>
                        <br /> For other browsers, please see the relevant
                        browser support resources or guidelines.
                      </p>
                    </li>
                    <li id="analytics">
                      <h2>7. GOOGLE ANALYTICS</h2>
                      <p>
                        We use Google Analytics to help us to understand how you
                        make use of Our content and work out how we can make
                        things better. These cookies follow your progress
                        through our website, collecting anonymous data on where
                        you have come from, which pages you visit, and how long
                        you spend on the site. This data is then stored by
                        Google in order to create reports. These cookies do not
                        store your personal data.
                        <br />
                        <br />
                        The information generated by the cookie about your use
                        of the Website, including your IP address, may be
                        transmitted to and stored by Google on servers in the
                        United States. Google may use this information for the
                        purpose of evaluating your use of the website, compiling
                        reports on website activity for us and providing other
                        services relating to website activity and internet
                        usage. Google may also transfer this information to
                        third parties where required to do so by law, or where
                        such third parties process the information on Google
                        behalf. Google will not associate your IP address with
                        any other data held by Google. By using this website,
                        you consent to the processing of data about you by
                        Google in the manner and for the purposes set out above.
                        <br />
                        <br />
                        The Google website contains further information about
                        Analytics and a copy of Google privacy policy pages.
                      </p>
                    </li>
                    <li id="external-website">
                      <h2>8. EXTERNAL LINKS ON THE WEBSITE</h2>
                      <p>
                        The Website may include advertisements, hyperlinks to
                        other websites, applications, content or resources. We
                        have no control over any websites or resources, which
                        are provided by companies or persons other than Us. You
                        acknowledge and agree that We are not responsible for
                        the availability of any such external sites or
                        resources, and do not endorse any advertising,
                        services/products or other materials on or available
                        from such websites or resources. You acknowledge and
                        agree that We are not liable for any loss or damage
                        which may be incurred by you as a result of the
                        availability of those external sites or resources, or as
                        a result of any reliance placed by you on the
                        completeness, accuracy or existence of any advertising,
                        products or other materials on, or available from, such
                        websites or resources. These external websites and
                        resource providers may have their own privacy policies
                        governing the collection, storage, retention and
                        disclosure of Your Personal Information that You may be
                        subject to. We recommend that You enter the external
                        Website and review their privacy policy. If you require
                        a list of third-party links on our Website, please write
                        to us at{" "}
                        <a href="mailto:info@atmegame.com">info@atmegame.com</a>{" "}
                        and we will provide you with the same.{" "}
                      </p>
                    </li>
                    <li id="your-rights">
                      <h2>9. YOUR RIGHTS</h2>
                      <p>
                        Unless subject to an exemption, you have the following
                        rights with respect to your personal data:
                        <br />
                        The right to request a copy of your personal data which
                        we hold about you;
                        <br />
                        The right to request for any correction to any personal
                        data if it is found to be inaccurate or out of date;
                        <br />
                        The right to withdraw Your consent to the processing at
                        any time;
                        <br />
                        The right to object to the processing of personal data;
                        <br />
                        The right to lodge a complaint with a supervisory
                        authority
                        <br />
                        The right to obtain information as to whether personal
                        data are transferred to a third country or to an
                        international organization.
                      </p>
                    </li>
                    <li id="confidentiality">
                      <h2>10. CONFIDENTIALITY</h2>
                      <p>
                        You further acknowledge that the Website may contain
                        information which is designated confidential by Us and
                        that you shall not disclose such information without our
                        prior written consent. Your information is regarded as
                        confidential and therefore will not be divulged to any
                        third party, unless if legally required to do so to the
                        appropriate authorities. We will not sell, share, or
                        rent your personal information to any third party or use
                        your e-mail address for unsolicited mail. Any emails
                        sent by us will only be in connection with the provision
                        of agreed services, and you retain sole discretion to
                        seek for discontinuation of such communications at any
                        point of time.
                      </p>
                    </li>
                    <li id="information-collector">
                      <h2>11. OTHER INFORMATION COLLECTORS</h2>
                      <p>
                        Except as otherwise expressly included in this Privacy
                        Policy, this document only addresses the use and
                        disclosure of information we collect from you. To the
                        extent that you disclose your information to other
                        parties, whether they are on our Websites or on other
                        sites throughout the Internet, different rules may apply
                        to their use or disclosure of the information you
                        disclose to them. To the extent that we use third party
                        advertisers, they adhere to their own privacy policies.
                        Since we do not control the privacy policies of the
                        third parties, you are subject to ask questions before
                        you disclose your personal information to others.
                      </p>
                    </li>
                    <li id="disclosure">
                      <h2>12. OUR DISCLOSURE OF YOUR INFORMATION</h2>
                      <p>
                        Due to the existing regulatory environment, we cannot
                        ensure that all of your private communications and other
                        personally identifiable information will never be
                        disclosed in ways not otherwise described in this
                        Privacy Policy. By way of example (without limiting and
                        foregoing), we may be forced to disclose information to
                        the government, law enforcement agencies or third
                        parties. Therefore, although we use industry standard
                        practices to protect your privacy, we do not promise,
                        and you should not expect, that your personally
                        identifiable information or private communications would
                        always remain private. We do, however assure you that
                        any and all disclosure of your personally identifiable
                        information shall be personally intimated to you through
                        an email sent to your provided email address. As a
                        matter of policy, we do not sell or rent any personally
                        identifiable information about you to any third party.
                        However, the following describes some of the ways that
                        your personally identifiable information may be
                        disclosed.
                        <br />
                        <br />
                        <strong> External Service Providers</strong>
                        <br /> There may be a number of services offered by
                        external service providers that help you use our
                        Websites. If you choose to use these optional services,
                        and in the course of doing so, disclose information to
                        the external service providers, and/or grant them
                        permission to collect information about you, then their
                        use of your information is governed by their privacy
                        policy.
                        <br />
                        <br />
                        <strong> Law and Order</strong>
                        <br /> We cooperate with law enforcement inquiries, as
                        well as other third parties to enforce laws, such as:
                        intellectual property rights, fraud and other rights. We
                        can (and you authorize us to) disclose any information
                        about you to law enforcement and other government
                        officials as we, in our sole discretion, believe
                        necessary or appropriate, in connection with an
                        investigation of fraud, intellectual property
                        infringements, or other activity that is illegal or may
                        expose us or you to legal liability.
                      </p>
                    </li>
                    <li id="review-profile">
                      <h2>
                        13. ACCESSING, REVIEWING AND CHANGING YOUR PROFILE{" "}
                      </h2>
                      <p>
                        Following registration, You can review and change the
                        information You submitted at the stage of registration,
                        except Email ID. An option for facilitating such change
                        shall be present on the Website and such change shall be
                        facilitated by the User. If You change any information,
                        We may or may not keep track of Your old information. We
                        will not retain in our files information you have
                        requested to remove for certain circumstances, such as
                        to resolve disputes, troubleshoot problems and enforce
                        our terms and conditions. Such prior information shall
                        be completely removed from our databases, including
                        stored "back up" systems. If you believe that any
                        information we are holding on you is incorrect or
                        incomplete, or to remove Your profile so that others
                        cannot view it, the User needs to remediate, and
                        promptly correct any such incorrect information.
                      </p>
                    </li>
                    <li id="control-password">
                      <h2>14. CONTROL OF YOUR PASSWORD</h2>
                      <p>
                        When you sign up to become a Member, you will also be
                        asked to choose a password. You are entirely responsible
                        for maintaining the confidentiality of your password. It
                        is important that you protect it against unauthorized
                        access of your account and information by choosing your
                        password carefully, and keeping your password and
                        computer secure by signing out after using our services.
                        <br />
                        You agree not to use the account, username, email
                        address or password of another Member at any time or to
                        disclose your password to any third party. You are
                        responsible for all actions taken with your login
                        information and password, including fees. If you lose
                        control of your password, you may lose substantial
                        control over your personally identifiable information
                        and may be subject to legally binding actions taken on
                        your behalf. Therefore, if your password has been
                        compromised for any reason, you should immediately
                        change your password. You agree to notify us immediately
                        if you suspect any consistent unauthorized use of your
                        account or access to your password even after changing
                        it.
                      </p>
                    </li>
                    <li id="security">
                      <h2>15. SECURITY</h2>
                      <p>
                        We treat data as an asset that must be protected against
                        loss and unauthorized access. We employ many different
                        security techniques to protect such data from
                        unauthorized access by members inside and outside the
                        Company. We follow generally accepted industry standards
                        to protect the Personal Information submitted to Us and
                        information that we have accessed.
                      </p>
                    </li>
                    <li id="severability">
                      <h2>16. SEVERABILITY</h2>
                      <p>
                        Each paragraph of this privacy policy shall be and
                        remain separate from and independent of and severable
                        from all and any other paragraphs herein except where
                        otherwise expressly indicated or indicated by the
                        context of the agreement. The decision or declaration
                        that one or more of the paragraphs are null and void
                        shall have no effect on the remaining paragraphs of this
                        privacy policy.
                      </p>
                    </li>
                    <li id="amendment">
                      <h2>17. AMENDMENT </h2>
                      <p>
                        Our Privacy Policy may change from time to time. The
                        most current version of the policy will govern our use
                        of your information and will always be at the Website.
                      </p>
                    </li>
                    <li id="automated-decision">
                      <h2>18. AUTOMATED DECISION MAKING</h2>
                      <p>
                        As a responsible company, we do not use automatic
                        decision-making or profiling.
                      </p>
                    </li>
                    <li id="consent-withdrawal">
                      <h2>
                        19. CONSENT WITHDRAWAL, DATA DOWNLOAD & DATA REMOVAL
                        REQUESTS
                      </h2>
                      <p>
                        To withdraw your consent, or to request the download or
                        delete your data with us for any or all our products &
                        services at any time, please email to{" "}
                        <a href="mailto:info@atmegame.com">info@atmegame.com</a>{" "}
                        from your registered email address.
                      </p>
                    </li>
                    <li id="contact-us">
                      <h2>20. CONTACT US </h2>
                      <p>
                        If you have any questions or concerns regarding this
                        privacy policy, you should contact us by sending an
                        e-mail to{" "}
                        <a href="mailto:info@atmegame.com">info@atmegame.com</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </CardContainer>
  );
}
