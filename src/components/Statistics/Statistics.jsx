import React from 'react'
import css from './statistics.module.css'
import PropTypes from "prop-types"



export default function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statsList}>
            {stats.map(statsEl => (
                  <li className={css.item} key={statsEl.id}>
           <span className={css.label}>{statsEl.label}</span>
      <span className={css.percentage}>{statsEl.percentage}%</span>
    </li>
        
            ))}
            </ul>
  </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}