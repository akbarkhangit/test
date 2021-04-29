import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Unequal  Access to Waste Services';

const WasteAccess = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<div />}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Providing Hygiene Services Solves Trash Problems Sweeping Cannot"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          In Portland, it is illegal to dispose of one's household waste in private or public garbage cans and dumpsters. Without facilities or services for legally disposing of their waste, many homeless residents struggle to manage their waste. The ability and desire to maintain clean spaces is undermined by frequent sweeps, which are often driven by public One Point of Contact complaints over cleanliness concerns. While the general population attributes trash on the streets as generated by houseless camps,
<strong> according to Metro RID, 78% of illegal waste in the region is dumped on the streets by housed residents</strong>
          {' '}
          <em>(</em>
          <a rel="noopener noreferrer" target="_blank" href="https://www.kgw.com/article/news/local/homeless/how-to-clean-up-garbage-at-homeless-camps-thats-a-question-metro-is-trying-to-answer/283-614297177"><em>Dooris, 11/13/2018</em></a>
          <em>)</em>
          .
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">In this cyclical way, people experiencing homelessness are both criminalized and stigmatized by the waste they generate. Central City Concern has a program to provide waste management services to camps that receive complaints from private businesses, but these clean-ups are not carried out in a way the allows unsheltered residents access to regular waste pick up that would give them say over what is indeed refuse and what things they make use of for their survival. We need a peer-designed system for regular trash pick up at homeless camps that functions similarly to how housed neighbors are able to dispose of their waste.</div>
        <div className="paragraph">
          Such an option would be best devised and implemented with the participation of people experiencing homelessness. A broader initiative to provide training and low barrier work opportunities for can and bottle recyclers is already in the works, and slated to begin in the spring of 2019 with Trash for Peace. With additional support, this initiative could also work to devise income-generation opportunities for peer-run waste management services within the houseless community
<em>–</em>
          through approaches similar to the city of Belo Horizonte's "
<a rel="noopener noreferrer" target="_blank" href="http://www.wiego.org/sites/default/files/publications/files/Dias_WIEGO_PB5.pdf"><em>Waste and Citizenship</em></a>
          " forum.
        </div>
      </div>
    )}
  />
);

WasteAccess.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default WasteAccess;
