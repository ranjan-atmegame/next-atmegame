import CardContainer from "@/components/ui/card/CardContainer";
import { getRobot } from "../server";
import CardHeader from "@/components/ui/card/CardHeader";
import Card from "@/components/ui/card/Card";
import styles from "./termCondition.module.css";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/term-condition";

  return {
    title: "Terms & Conditions - Atmegame.com",
    description:
      "Go through the Terms and Conditions of Atmegame which helps you to play online games perfectly and enjoy seamless gaming experience.",
    keywords: ["term condition", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function TermAndConditions() {
  return (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          slug={``}
          title={`TERMS AND CONDITIONS`}
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
                TERMS AND CONDITIONS{" "}
                <span className="last-modified">
                  Last modified: March, 2016
                </span>
              </h1>
              <p>
                By viewing or accessing Atmegame.com atmegame games, products or
                services You expressly agree to the following Terms and
                Conditions (hereafter referred to as, “Terms of Use”, “Terms”)
                detailed below. Atmegame.com These Terms govern Your use of Our
                Website, all its content, software, and services offered
                thereon. By using Our Website, You agree to these Terms as well
                as receiving the required notices and to transact with Us via
                computer. If You do not agree with these Terms, We advise You
                not to use Our Website.
              </p>

              <div className={styles.sitckyMenu}>
                <div className={styles.sitckyLinks}>
                  <ul className={styles.grayBox}>
                    <li>
                      <a href="#term-and-condition" title="">
                        1. TERMS AND CONDITIONS
                      </a>
                    </li>
                    <li>
                      <a href="#electronic-policy" title="">
                        2. ELECTRONIC-DELIVERY POLICY AND YOUR CONSENT
                      </a>
                    </li>
                    <li>
                      <a href="#service-availability" title="">
                        3. SERVICES AVAILABILITY
                      </a>
                    </li>
                    <li>
                      <a href="#privacy-policy" title="">
                        4. PRIVACY POLICY
                      </a>
                    </li>
                    <li>
                      <a href="#access-costs" title="">
                        5. ACCESS COSTS
                      </a>
                    </li>
                    <li>
                      <a href="#responsibility" title="">
                        6. YOUR RESPONSIBILITIES
                      </a>
                    </li>
                    <li>
                      <a href="#user-conduction" title="">
                        7. USER CONDUCTION
                      </a>
                    </li>
                    <li>
                      <a href="#restriction" title="">
                        8. AGE RESRICTIONS
                      </a>
                    </li>
                    <li>
                      <a href="#uploading-games" title="">
                        9. UPLOADING GAMES
                      </a>
                    </li>
                    <li>
                      <a href="#viruses" title="">
                        10. VIRUSES
                      </a>
                    </li>
                    <li>
                      <a href="#third-party-websites" title="">
                        11. THIRD PARTY WEBSITES
                      </a>
                    </li>
                    <li>
                      <a href="#third-party-games" title="">
                        12. THIRD PARTY GAMES
                      </a>
                    </li>
                    <li>
                      <a href="#property" title="">
                        13. INTELLECTUAL PROPERTY
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.staticContentBox}>
                  <ul>
                    <li id="term-and-condition">
                      <h2>1. TERMS AND CONDITIONS </h2>
                      <h3>1 .1 CHANGES TO THE TERMS</h3>
                      <p>
                        We may change these Terms of Use at any time, You are
                        responsible for checking periodically any changes. The
                        mention “Last modified” followed by a date, shall help
                        You in noticing changes to these Terms. If You do not
                        agree to these future changes to Our Terms, please do
                        not continue to use Our Website.If You continue to use
                        the Website after We post changes to these Terms of Use,
                        You are signifying Your acceptance of the new Terms.
                      </p>
                      <br />
                      <h3>1 .2 ADDITIONAL TERMS</h3>
                      <p>
                        TERMSCertain areas of Our Website, where You can
                        download or upload files, may include usage guidelines
                        and rules that will supplement these Terms. By using
                        those services on the Website, You agree to comply with
                        such guidelines and rules
                      </p>
                    </li>

                    <li id="electronic-policy">
                      <h2>2. ELECTRONIC-DELIVERY POLICY AND YOUR CONSENT</h2>
                      <p>
                        You agree that We may electronically provide You
                        required notices, agreements, and other information
                        concerning the Website. If You no longer agree to
                        receive notices electronically, please cease to use the
                        Website
                      </p>
                    </li>

                    <li id="service-availability">
                      <h2>3. SERVICES AVAILABILITY</h2>
                      <p>
                        Atmegame aims to provide a stable and reliable Website.
                        However, it may happen that games and services are
                        unavailable due to maintenance of the system or
                        technical problems. Atmegame may also suspend or
                        permanently remove any game or service for any reason
                        without Your consent or giving prior notice.Atmegame
                        will not be liable for any loss, damage or upset that
                        You suffer as a consequence of a game or service
                        becoming temporarily or permanently unavailable
                      </p>
                    </li>
                    <li id="privacy-policy">
                      <h2>4. PRIVACY POLICY</h2>
                      <p>
                        We designed Our Privacy Policy to make important
                        disclosures about Our privacy practices regarding any
                        personal data You may provide Us or We receive from You.
                        For all questions about how We use the information We
                        obtain through Your use of the Website
                      </p>
                    </li>
                    <li id="access-costs">
                      <h2>5. ACCESS COSTS</h2>
                      <p>
                        You must provide, at Your own expense, the equipment and
                        Internet connections that You will need to access and
                        use Our Website. If You access Our Website through a
                        telephone line, please call Your local phone company to
                        determine if the access numbers You select are subject
                        to long- distance or other toll charges at Your
                        location. Also, if You access the Website through
                        wireless applications (e.g., cell phones), Your carrier,
                        such as a wireless carrier, may charge fees for alerts,
                        web browsing, messaging, and other services that require
                        the use of airtime and wireless data services. Check
                        with Your carrier to verify whether any such fees apply
                        toYou. You are solely responsible for any costs You
                        incur to access the Websites through any wireless or
                        other communication service
                      </p>
                    </li>

                    <li id="responsibility">
                      <h2>6. YOUR RESPONSIBILITIES</h2>
                      <h3>6.1. USE OF THE WEBSITE</h3>
                      <p>
                        You may use the Website for lawful purposes only. By
                        using Our Website You must keep Your contact information
                        up to date
                      </p>
                      <h3>6.2. RESTRICTION OF USE</h3>
                      <p>You may not use Our Websites:</p>
                      <ol>
                        <li>For Your own commercial gain;</li>
                        <li>
                          To offer any form of advertising or promotion without
                          Our prior written consent; or
                        </li>
                        <li>
                          To provide any false personal information or any
                          information, content, or material on account of anyone
                          other than Yourself without permission.You may not use
                          Our Website in any manner that could damage, disable,
                          overburden, or impair Our servers or networks or
                          interfere with any other party”s use and enjoyment of
                          the Website. You may not attempt to gain unauthorized
                          access to any services, user accounts, computer
                          systems, or networks through hacking, password mining,
                          or any other means. We may take any legal and
                          technical measures to prevent the violation of this
                          provision and to enforce these Terms of Use.You may
                          not use the Website or any of Our communication tools
                          to transmit, directly or indirectly, any unsolicited
                          bulk communications (including emails and instant
                          messages). You may not harvest information about Our
                          users for the purpose of sending (or to facilitate the
                          sending) of unsolicited bulk communications. You may
                          not induce or allow others to use the Website to
                          violate the terms of this section. We may terminate
                          Your access or use of the Website immediately and take
                          other legal action if You, or anyone using Your access
                          to the Website, violate these provisions. We may take
                          any technical measures to prevent unsolicited bulk
                          communications from entering, utilizing, or remaining
                          within Our computer or communications networks.
                        </li>
                      </ol>
                      <h3>6.3. SUBMITTING ON THE WEBSITE WEB</h3>
                      <p>
                        You may not submit or transmit through the Website any
                        information, content, or material or otherwise engage in
                        any conduct that:
                      </p>

                      <ol>
                        <li>
                          Violates or infringes the rights of others, including,
                          without limitation, patent, trademark, trade secret,
                          copyright, publicity, or other proprietary rights;
                        </li>
                        <li>
                          Is unlawful, threatening, abusive, harassing,
                          defamatory, libellous, deceptive, fraudulent, invasive
                          of another”s privacy, tortuous, contains explicit or
                          graphic descriptions or accounts of sexual acts, or is
                          pornographic;
                        </li>
                        <li>
                          Victimizes, harasses, degrades, or intimidates an
                          individual or group of individuals on the basis of
                          religion, gender, sexual orientation, race, ethnicity,
                          age, or disability;
                        </li>
                        <li>
                          Impersonates any person, business, or entity,
                          including WEL and its employees and agents;
                        </li>
                        <li>
                          Contains viruses or any other computer code, files, or
                          programs that interrupt, destroy, or limit the
                          functionality of any computer software or hardware or
                          telecommunications equipment, or that otherwise permit
                          the unauthorized use of a computer or computer
                          network;
                        </li>
                        <li>
                          Encourages conduct that would constitute a criminal
                          offense or give rise to civil liability;
                        </li>
                        <li>
                          Violates these Terms of Use, guidelines, or any policy
                          posted on the Websites;
                        </li>
                        <li>
                          Interferes with the use of the Websites by Any
                          information, content, or material You have created and
                          submitted or transmitted through Our Website and that
                          is covered by intellectual property rights (or similar
                          rights) shall be licensed to Us as a nonexclusive,
                          transferable, sub-licensable, royalty-free, perpetual,
                          worldwide license, and We are entitled to use such
                          intellectual property on or in connection with the
                          Website. Except in the case where We have signed an
                          exclusive agreement When You provide information,
                          content, or material and use the public privacy
                          setting, every visitor to the Website will have access
                          to such information, and We have no control over that
                          information or what users do with it.We reserve the
                          right to remove any of your information, content, or
                          material from the Website if it violates these Terms
                          of Use.UNDER NO CIRCUMSTANCES INCLUDING, BUT NOT
                          LIMITED TO, NEGLIGENCE, SHALL WEL OR ANY THIRD PARTY
                          CONTENT PROVIDER OR THEIR RESPECTIVE AGENTS BE LIABLE
                          FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR
                          CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF OR
                          INABILITY TO USE WEL WEB SITES, SOFTWARE AND/OR
                          SERVICES, EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE
                          POSSIBILITY OF SUCH DAMAGES.YOU AGREE TO ASSUME ALL
                          RISK RELATED TO YOUR USE OF WEL WEBITES AND SERVICES,
                          INLCUDING BUT NOT LIMITED TO, THE RISK OF
                          COMMUNICATIONS WITH OTHER PEOPLE OR DAMAGE TO YOUR
                          COMPUTER.
                        </li>
                      </ol>
                    </li>
                    <li id="user-conduction">
                      <h2>7. USER CONDUCTION</h2>
                      <p>
                        users may be banned or accounts suspended or terminated
                        on the entire Atmegame network websites or any game
                        available on Our Website if users use inappropriate
                        language or inappropriate behaviour as determined by
                        WEL. WEL is not responsible for user content, postings,
                        chat, and/or communications. Users are responsible for
                        their own actions. You agree not to do any of the
                        following:
                      </p>
                      <ol>
                        <li>
                          Post, distribute, or otherwise make available or
                          transmit any data, text, message, or computer file
                          that We deem to be: (a) defamatory, abusive,
                          harassing, insulting, threatening, or that could be
                          deemed to be stalking; (b) bigoted, hateful, or
                          racially offensive; (c) vulgar, obscene, or sexually
                          explicit (language or images); or that (d) encourages
                          or advocates illegal activity or the discussion of
                          illegal activities with the intent to commit them;
                        </li>
                        <li>
                          {" "}
                          Post, distribute, or otherwise make available or
                          transmit any data, text, message, computer file, or
                          other material that infringes and/or violates any
                          right of a third party or any domestic or
                          international law, rule, or regulation, including but
                          not limited to: (a) copyright, patent, trademark, or
                          other proprietary rights; (b) right of privacy
                          (specifically, You must not distribute another
                          person”s personal information of any kind without
                          their express permission) or publicity; (c) any
                          confidentiality obligation;
                        </li>
                        <li>
                          Advertise or sell any products, services or otherwise
                          (whether or not for profit), or solicit others or use
                          any Forum for commercial purposes of any kind;
                        </li>
                        <li>
                          Post, distribute, or otherwise make available or
                          transmit any software or other computer files that
                          contain a virus or other harmful component;
                        </li>
                        <li>
                          Impersonate any person or entity or misrepresent Your
                          identity or affiliation with any person or entity;
                        </li>
                        <li>
                          {" "}
                          Engage in antisocial, disruptive, or destructive acts,
                          including “flaming,” “spamming,” “flooding,”
                          “trolling,” and “griefing” as those terms are commonly
                          understood and used on the Internet;
                        </li>
                        <li>
                          Delete any legal notices, disclaimers, or proprietary
                          notices such as copyright or trademark symbols, or
                          modify any logos that You do not own or have express
                          permission to modify;{" "}
                        </li>
                        <li>
                          {" "}
                          Post, distribute, or otherwise make available or
                          transmit material or make statements that do not
                          generally pertain to the designated topic or theme of
                          any Forum. We reserve the right to remove any
                          material, and if We deem appropriate, to turn over to
                          law enforcement officials, any material, including
                          message, e-mail, or posting, that is in violation of
                          these Rules. We also reserve the right to remove
                          messages, e-mails, or postings that do not pertain to
                          the designated topic or theme of the service as
                          determined by WEL. We also reserve the right to comply
                          with any order or otherwise cooperate with law
                          enforcement officials regarding the identification of
                          any user alleged to be using a WEL Y8 network websites
                          or services in violation of the law.
                        </li>
                      </ol>
                    </li>
                    <li id="restriction">
                      <h2>8. AGE RESTRICTIONS</h2>
                      <p>
                        The Atmegame network Websites or its services are not
                        intended for persons under 13 years of age. By accessing
                        or using the services, You represent and warrant that
                        You are 13 or older. Our Website is not directed for
                        persons under 13 years of age. By accessing and/or using
                        Our Website, You represent and warrant that You are 13
                        or older. In addition, parents and guardians of children
                        over the age of thirteen should be aware that Our
                        Website and services are designed to appeal to a broad
                        audience. Accordingly, it is the parents or guardian, of
                        said-children, responsibility to determine whether any
                        portion of the Website or services is inappropriate for
                        their child. Moreover, any person allowing under 13
                        years old to access the atmegame network websites or
                        services, with its computer, internet enabled device,
                        internet connection and/or facilities (whether owned,
                        leased or borrowed) that shall assume full liability for
                        any consequences and that UNDER NO CIRCUMSTANCES
                        INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE NEITHER WEL,
                        ANY THIRD PARTY CONTENT PROVIDER NOR THEIR RESPECTIVE
                        AGENTS SHALL BE LIABLE FOR ANY DIRECT, INDIRECT,
                        INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT
                        OF THE USE OF OR INABILITY TO USE THE SITE BY USERS
                        UNDER 13 YEARS OF AGE, EVEN IF SUCH PARTY HAS BEEN
                        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                      </p>
                    </li>
                    <li id="uploading-games">
                      <h2>9. UPLOADING GAMES</h2>
                      <p>
                        By uploading a file, You warrant that You own the
                        copyright or have the necessary rights for uploading it.
                        <br />
                        <br />
                        If You have Your own sponsors, We warn You that We
                        reserve the right to block external links and/or to
                        cover up in-game advertisements if the advertisement
                        does not comply with our advertisement policy.Uploading
                        games is for a non-commercial purpose only. You must
                        respect the following rules:
                      </p>
                      <ol>
                        <li>Be at least 13 years of age; </li>
                        <li>
                          Not upload any software or any computer file that
                          contains a virus or other harmful component;
                        </li>
                        <li>
                          You also agree to respect our logo rules, you
                          understand that your file might not be posted on
                          Y8.COM if the logo and/or intro is missing.
                        </li>
                        <li>
                          You agree that We reserve the right to reject any game
                        </li>
                      </ol>
                    </li>
                    <li id="viruses">
                      <h2>10. VIRUSES</h2>
                      <p>
                        You understand that You are responsible for ensuring
                        that Your computer has suitable anti-virus software that
                        is up to date. We will take reasonable steps to ensure
                        that the content on the site is free from viruses and
                        other malicious software. We shall not be held
                        responsible for any loss or damage that You suffer as a
                        consequence of receiving a virus or other malicious
                        software through use of Our website.We shall not be
                        liable for any loss or corruption of data that You
                        suffer as a consequence of receiving a virus or other
                        malicious software through use of Our website.
                      </p>
                    </li>
                    <li id="third-party-websites">
                      <h2>11. THIRD PARTY WEBSITES</h2>
                      <p>
                        Our Website may include links to other websites or
                        resources. Since We have no control over such websites
                        and resources, You acknowledge and agree that We are not
                        responsible for the availability of such external sites
                        or resources, and do not endorse and are not responsible
                        for any content, advertising, products or other
                        materials on or available from such websites or
                        resources. Our Terms and Privacy Policy do not apply to
                        Your use of those other websites and resources. We
                        cannot guarantee the completeness or accuracy of the
                        websites or URLs to which Website”s services link or
                        refer. The process of including websites in Our Website
                        services is largely automatic. WEL does not screen the
                        websites included in the services, and these other
                        websites are maintained by persons over whomWe exercise
                        no control.For these reasons, You further acknowledge
                        and agree that We shall not be responsible, directly or
                        indirectly, for any damage or loss caused or alleged to
                        be caused by or in connection with use of or reliance on
                        any such content, goods or services available on or
                        through any such websites or resources.
                      </p>
                    </li>
                    <li id="third-party-games">
                      <h2>12.DISCLAIMER REGARDING THIRD PARTY GAMES</h2>
                      <p>
                        APPLICATIONS OR SERVICES YOU HEREBY ACKNOWLEDGE AND
                        AGREE THAT ANY THIRD PARTY GAME, APPLICATION OR SERVICE
                        THAT MAY BE ACCESSED VIA WEL ATMEGAME NETWORK WEBSITES,
                        SUCH AS BUT NOT LIMITED TO GAME THAT IS BEING PROVIDED
                        TO YOU BY A THIRD PARTY PROVIDER AND NOT BY WEL. YOU
                        HEREBY ACKNOWLEDGE AND AGREE THAT YOUR USE OF ANY SUCH
                        THIRD PARTY GAME, APPLICATION OR SERVICE MAY ALSO BE
                        GOVERNED BY SUCH THIRD PARTY GAME, APPLICATION OR
                        SERVICE PROVIDER”S TERMS OF USE, LICENSE AGREEMENT,
                        PRIVACY POLICY, OR OTHER SUCH AGREEMENT. LICENSOR
                        EXPRESSLY DISCLAIMS ANY LIABILITY IN CONNECTION WITH ANY
                        SUCH THIRD PARTY GAMES, APPLICATIONS OR SERVICES OR YOUR
                        USE THEREOF.
                      </p>
                    </li>
                    <li id="property">
                      <h2>13. ATMEGAME.COM INTELLECTUAL PROPERTY</h2>
                      <p>
                        APPLICATIONS OR SERVICES YOU HEREBY ACKNOWLEDGE AND
                        AGREE THAT ANY THIRD PARTY GAME, APPLICATION OR SERVICE
                        THAT MAY BE ACCESSED VIA WEL ATMEGAME NETWORK WEBSITES,
                        SUCH AS BUT NOT LIMITED TO GAME THAT IS BEING PROVIDED
                        TO YOU BY A THIRD PARTY PROVIDER AND NOT BY WEL. YOU
                        HEREBY ACKNOWLEDGE AND AGREE THAT YOUR USE OF ANY SUCH
                        THIRD PARTY GAME, APPLICATION OR SERVICE MAY ALSO BE
                        GOVERNED BY SUCH THIRD PARTY GAME, APPLICATION OR
                        SERVICE PROVIDER”S TERMS OF USE, LICENSE AGREEMENT,
                        PRIVACY POLICY, OR OTHER SUCH AGREEMENT. LICENSOR
                        EXPRESSLY DISCLAIMS ANY LIABILITY IN CONNECTION WITH ANY
                        SUCH THIRD PARTY GAMES, APPLICATIONS OR SERVICES OR YOUR
                        USE THEREOF.
                      </p>

                      <h3>13.1 ATMEGAME TRADEMARKS</h3>
                      <p>
                        Our Website, including its content, is protected under
                        international intellectual property by rights such as
                        trademark and copyright law
                      </p>

                      <h3>13.2. USE OF OUR TRADEMARKS</h3>
                      <p>
                        You agree not to use, copy, download or exploit Our
                        trademark without the prior written ATMEGAME.COM You
                        agree not to use Our trademarks, or copyrights, in a
                        manner that creates confusion.Consistent with trademark
                        infringement law, You are prohibited from using any of
                        Our Trademarks. You may not register in any
                        jurisdiction, a domain name using all, or a part, of Our
                        Trademarks in a manner that may imply a partnership with
                        Us, or that may create, in any way confusion between
                        ATMEGAME.COM and Your brand, services or products. You
                        may not imitate Our Trademarks, logo, or other elements
                        of the Website in any of Your advertising, on Your
                        personal website, for promotional matters or other
                        materials.In no case shall You use Our copyrights and/or
                        Trademarks in a disparaging or degrading way.
                      </p>

                      <h3>13.3. TRADEMARK INFRINGEMENT</h3>
                      <p>
                        You are aware that upon infringement of this clause, You
                        will be liable for Trademark infringement, and that We
                        have the right to pursue legal actions. If You are aware
                        of any illegal usage by any person of Our Trademarks,
                        please contact Us
                      </p>
                    </li>
                    <p>
                      <strong>
                        You agree to indemnify and hold Us and Our subsidiaries,
                        affiliates, officers, agents, employees, partners and
                        licensors harmless from any claim or demand, including
                        reasonable attorney fees, made by any third party due to
                        or arising out of the content You submit, post,
                        transmit, make available through the services, Your
                        connection to the services, Your violation of the Terms,
                        or Your violation of any rights of another.
                      </strong>
                    </p>
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
