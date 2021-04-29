import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Unequal Access to City Water & Sewer';

const WaterAccess = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<div />}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText=" The High Community Cost of Denying Unsheltered Portlanders Access to Bathrooms, Showers, and Laundry Facilities"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Many don't realize that our neighbors experiencing houselessness have little-to-no-access to bathrooms, showers, laundry; that no amount of patrolling, fining, cleaning, and shelter removals will change our neighbors' use of public space for survival because as a City we consistently deny our neighbors use of municipal water and sewer services so easily accessed by the rest of us in our homes, cafes, restaurants, public buildings, etc. (
<em>Hygiene Report 2016; Kalpakis, Pitstop Pdx; Evans & Lindsay 2018</em>
          )
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Equitable access to bathrooms, showers and laundry play an important role in the health and well-being of both our housed and unhoused neighbors. Exclusion from use of city water, sewer, and trash services, as well as discrimination of our neighbors experiencing houselessness face from businesses prohibiting bathroom use, are significant risk factors contributing to
{' '}
          <strong><em>all Portland residents' vulnerability </em></strong>
          to outbreaks in deadly diseases. Specifically, inequitable access to hygiene helps spread Methicillin-Resistant Staphylococcus Aureus (MRSA); fungal, strep and staph infections and skin infections (e.g. scabies, head lice and body lice), Hepatitis A, B, and C outbreaks as well as bacterial and viral diseases, as the City of San Diego recently discovered with their Hepatitis outbreak
{' '}
          <em>(Hawash, Goes Behind, Kimball, 2016; City of San Diego, 9/22/2017).</em>
        </div>
        <div className="paragraph">
          From Katherine Kalpakis' recent survey of industrial inner Southeast we know that the most common location for individuals to use restroom facilities is the Portland Loo in Saint Francis Park, Buckman Field, and the port-o-potty under the Hawthorne bridge. These facilities are approximately 0.8-mile walk, depending on your location in the neighborhood. Individuals reported that if unable to make it to these facilities they preferred using portable containers, and disposing of the container along the street or in business dumpsters or sewers. Some respondents reported accessing restrooms inside St. Francis Dining Hall and City Team Ministries but cited limited hours for bathrooms at both facilities. Individuals reported some access to the bathroom at Jackson's Shell Gas Station" (
<em>Kalpakis, PDX PitStop Proposal</em>
          ).
        </div>
        <div className="paragraph">
          According to a 2016 PSU hygiene survey carried out on the west side of downtown Portland, only a handful of places offer showers or laundry in all of Portland (Transition Projects, Inc., JOIN, Red Door (St Andre Bessette), Rose Haven, Union Gospel Mission, and the Portland Rescue Mission). People frequently wait half a day or more to access these facilities only to be turned away when they reach capacity. Most only operate Monday to Friday between 9 and 5 with limited, if any, weekend hours (
<em>Hawash, Goes Behind, Kimball, 2016;</em>
          ).
        </div>
        <div className="paragraph">
          Equitable access to bathrooms, laundry, and showers would have the following community benefits: (1) reduction of biohazard exposure, (2) access to critical health-sustaining sanitation services for homeless individuals, (3) greater enjoyment of public spaces by housed and unhoused residents alike, (4) mitigation of potential risk from environmental and public health hazards, and (5) reduction of costs associated with cleaning human waste off the streets. We know from experiences in Goose Hollow and in San Diego that
<em>–</em>
          where they are well maintained
<em>–</em>
          port-o-potties, especially nicely decorated ones, are generally used and treated respectfully.
        </div>
        <div className="paragraph">Below this we include the full PSU Report from Hawash, Goes Behind, and Kimball, which highlights just how inequitable access to city water and sewer is in Portland and how it is not currently easily publicly accessible.</div>
        <div className="paragraph"><strong>BY HAWASH, GOES BEHIND, AND KIMBALL</strong></div>
        <div className="paragraph">"In partnership with Sisters Of The Road, located in Old Town/Chinatown, it was determined that a deep exploration of the hygiene needs and challenges of people experiencing poverty and homelessness was needed. Master of Social Work students in a graduate level poverty course at the School of Social Work (PSU) worked in collaboration with community members, people who are unhoused, to determine the survey questions and methods for outreach.</div>
        <div className="paragraph">In February 2014 an IRB was granted by Portland State University's Institutional Review Board and outreach and surveying began. A total of 550 surveys (N = 550) were completed and analyzed (2016); subsequently this report was created to report back the stories and input we heard from people living outside highlighting their struggle to meet their basic human need for hygiene and health.</div>
        <div className="paragraph"><strong>Access to hygiene, access to health: </strong></div>
        <div className="paragraph">Access to hygiene plays a critical role in health and well-being. Inaccessible hygiene has been linked to the spread of disease (individual and community) including Methicillin-Resistant Staphylococcus Aureus (MRSA); fungal, strep and staph infections and skin infections (e.g. scabies, head lice and body lice). It also has potential public health implications such as Hepatitis A, B, and C; various bacterial and viral diseases as well as potential introduction of environmental toxins in the cleanup of human waste in public spaces and the contamination of public water sources. In terms of connection to hygiene and health, 40% (n = 222) of respondents reported medical problems related to inaccessible or non-existent hygiene resources. Survey respondents reported developing staph infections, MRSA, scabies, endocarditis, and urinary tract infections. As a result of these medical issues, many respondents reported using hospital systems including emergency rooms to meet their health needs. Others reported accessing Urgent Care, Primary Care Clinics including CCOs, or other community based medical clinics (e.g. Central City Concern).</div>
        <div className="paragraph"><strong>Some access, however, is limited:</strong></div>
        <div className="paragraph">The lack of access to hygiene includes, but is not limited to, access to bathrooms, shower facilities, laundry, feminine hygiene, and dental hygiene. Many respondents reported using bathrooms in public facilities (55%, n = 305; e.g. Central Library, City Hall, and the mall), the Portland Loo (33%, n = 183), and shelter restrooms (32%, n= 176). Other locations respondents noted included privately owned businesses, outside/street/brush, or through the use of plastic jugs or buckets.</div>
        <div className="paragraph">In Portland, as is the case in other towns and cities across Oregon, we criminalize poverty. There are numerous ordinances that allow for citations for various infractions to people who are living outside. As of 2014 the City of Portland had eleven ordinances which targeted specific behaviors ; e.g. sanitation, hygiene, public urination or defecation; sleeping, camping, lodging; food sharing; and standing, sitting, resting. While one may conceive these laws are necessary we must recognize that they do affect people living outside at greater numbers than those of us who are housed. Respondents noted experiencing harassment by private security or police (40%, n=222); reported having been cited or ticketed (21%, n=115); reported being denied access to meals, foods or services due to lacking hygiene (22%, n=123) and denied access to shelter due to lacking hygiene (20%, n=111).</div>
        <div className="paragraph"><strong>Where do people go to get clean?</strong></div>
        <div className="paragraph">To meet hygiene needs we must recognize this struggle is much more than just access to bathrooms but also consider showering, washing clothes and access to feminine hygiene supplies as well. Respondents most frequently reported utilizing Transition Project, Inc. (46%, n = 253) and JOIN (11%, n = 61). Some respondents (37%, n = 206) noted getting some hygiene needs met at various other locations including Red Door (St Andre Bessette), Rose Haven, Sisters Of The Road, Union Gospel Mission, and the Portland Rescue Mission. It is important to know that many of the above mentioned organizations are open for limited "business" hours and most are only open Monday through Friday (9am-5pm) with limited weekend hours, if any at all. TPI and JOIN are just a few places that provide showers, laundry, and bathroom access. JOIN is able to provide approximately 40 showers a day/5 days per week and also provides vouchers for laundry at a nearby laundromat. TPI provides approximately 100 slots for showers daily and has the capacity to provide approximately 48 loads of laundry per day. So while the respondents frequently reported TPI as a place to go for hygiene needs it does not accurately indicate that the hygiene needs are being met. Indeed, respondents frequently reported barriers to getting hygiene needs met including limited hours (51%, n =280), facilities are too far away (30%, n = 163), and other issues (29%, n = 160) which included long lines, health barriers, cleanliness of facilities, and time limits.</div>
        <div className="paragraph"><strong>A community hygiene center:</strong></div>
        <div className="paragraph">The most recent Point-in-time Count of Homelessness (Portland/Gresham/Multnomah County, 2015) report noted that 3,801 people were defined as homeless according to the U.S. Department of Housing and Urban Development's (HUD) definition of homelessness. We know from this report that the number of African Americans who were unsheltered increased by 48% from 2013-2015; we know that the number of unsheltered women increased by 15%; and families with children increased 24% during this same time period.</div>
        <div className="paragraph">The number of people with disabilities did not increase from 2013-2015, but remains extremely high at 57% and 67% of women surveyed noted they had disabilities. This report exhibits the need by highlighting the experience and voices of people struggling to meet their human need for hygiene: to get their bodies clean, to have access to clean restrooms with warm water and soap and access to free laundry facilities to clean their clothing. As human beings, unhoused or housed, we are all deserving of health and to be free from debilitating and sometimes life threatening diseases, particularly those that are related to hygiene. Access to hygiene is vital to achieve this goal, especially for our unhoused community members. Through in-depth conversations with community members they voiced what is needed as experts in their own lives and experience &ndash; here is what they said is needed in a hygiene center:</div>
        <ul>
          <li>Open seven days per week, at least 12-14 hours per day (47%, n=260);</li>
          <li>Accessible showers and supplies (50%, n=260);</li>
          <li>Accessible bathrooms (51%, n=283);</li>
          <li>Washer/dryer laundry facilities (82%, n=453);</li>
          <li>Storage/locker space (47%, n=255) is needed."</li>
        </ul>
        <div className="paragraph">Principal Investigator</div>
        <div className="paragraph">Lisa Hawash, MSW</div>
        <div className="paragraph">Assistant Professor of Practice, School of Social Work, Portland State University</div>
        <div className="paragraph">Co-Investigator</div>
        <div className="paragraph">Lindsay Goes Behind, MSW</div>
        <div className="paragraph">Policy Coordinator, Native American Youth Association (NAYA)</div>
        <div className="paragraph">Data Consultant</div>
        <div className="paragraph">Ericka Kimball, MSW, PhD</div>
        <div className="paragraph">Assistant Professor, School of Social Work, Portland State University</div>
      </div>
    )}
  />
);

WaterAccess.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default WaterAccess;
