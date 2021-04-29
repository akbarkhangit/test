import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../Visualizations/LineChart';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'PUBLIC REPORTING OF CAMPSITES';

const ReportsPerUniqueSite = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <LineChart
        dataContext="reportsWeeklyData"
        twoLineVis
        legendLabel={['Number of Public Campsite Reports Per Week (One Point of Contact)', 'Number of Unique Campsites Reported Per Week (Estimated by the City)']}
        lineColor="#2FD89F"
        toolTipLabel="Reports Filed"
      />)}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Perception Versus Reality"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          From 2017 to 2018,
{' '}
          <strong>the number of unique campsites</strong>
          {' '}
          identified by the City's "One Point of Contact" program has remained relatively unchanged at around 110 camps each week. However, the
{' '}
          <strong>number of public complaints</strong>
          {' '}
          about street camps has risen to well over 600 reports a week as of October 2018. City eviction and seizures targeting that steady number of campsites have increased as well, as shown in our next graphic.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Why so many reports? In specific neighborhoods, some residents have banded together on Nextdoor and Facebook to coordinate campsite reporting and police calls to target specific camps in the vicinity of neighbors' homes
{' '}
          <em>(</em>
          <a rel="noopener noreferrer" target="_blank" href="https://www.latimes.com/nation/la-na-portland-homeless-vigilantes-20181218-story.html"><em>Schmid,12/29/2018</em></a>
          <em>; </em>
          <a rel="noopener noreferrer" target="_blank" href="https://news.streetroots.org/2018/10/05/rahab-s-sisters-radical-hospitality-wake-tension"><em>Hill, 10/05/2018</em></a>
          <em>; </em>
          <a rel="noopener noreferrer" target="_blank" href="https://www.portlandmercury.com/news/2018/10/11/23548160/hall-monitor-service-resistant"><em>Zielinksi, 10/11/2018</em></a>
          <em>)</em>
          . When we examined a map of public reports, and compared it to actual sweep-evictions that we geocoded, we found multiple public reports of individual campsites were particularly high in the neighborhoods of Montavilla and Lents where there are especially strong Facebook and Nextdoor groups that express anti-houseless sentiments and advise one another on tactics for filming, following, and using the police and campsite reporting system to harass their unsheltered neighbors
{' '}
          <em>(</em>
          <a rel="noopener noreferrer" target="_blank" href="https://www.latimes.com/nation/la-na-portland-homeless-vigilantes-20181218-story.html"><em>Schmid,12/29/2018</em></a>
          <em>; </em>
          <a rel="noopener noreferrer" target="_blank" href="https://news.streetroots.org/2018/10/05/rahab-s-sisters-radical-hospitality-wake-tension"><em>Hill, 10/05/2018</em></a>
          <em>; </em>
          <a rel="noopener noreferrer" target="_blank" href="https://www.portlandmercury.com/news/2018/10/11/23548160/hall-monitor-service-resistant"><em>Zielinksi, 10/11/2018</em></a>
          <em>)</em>
          . Correspondingly, there have been higher numbers of campsite evictions in these areas as well. However, the City's campsite evaluation system does not prioritize a decision to sweep based on the number of public reports. Rather, it relies on its own points system to determine how urgent it is to initiate an eviction process. Below we describe that process along with the dramatic increase in sweep-evictions.
        </div>
      </div>
    )}
  />
);

ReportsPerUniqueSite.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default ReportsPerUniqueSite;
