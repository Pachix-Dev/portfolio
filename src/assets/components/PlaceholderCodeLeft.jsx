import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

export function PlaceholderCodeLeft (props) {
  const { scrollYProgress } = useScroll()
  const translateX = useTransform(
    scrollYProgress,
    [props.initialY, props.progressY],
    [0, 50]
  )
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('y changed to', latest)
  })

  return (
    <>
      <div className='inicio-code-left-bg'>
        <svg viewBox='0 0 903 887' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path style={{ translateX }} d='M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z' fill='#F4A949' />
          <motion.path style={{ translateX }} d='M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z' fill='#9C27B0' />
          <motion.path style={{ translateX }} d='M478.267 521.382L894.745 524.805L899.401 539.9L483.124 537.176L478.267 521.382Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z' fill='#F4A949' />
          <motion.path style={{ translateX }} d='M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z' fill='#F4A949' />
          <motion.path style={{ translateX }} d='M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z' fill='#F4A949' />
          <motion.path style={{ translateX }} d='M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z' fill='#F4A949' />
          <motion.path style={{ translateX }} d='M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z' fill='#1C5F9A' />
          <motion.path style={{ translateX }} d='M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z' fill='#1C5F9A' />
          <path d='M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z' fill='#1C5F9A' />
          <path d='M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z' fill='#1C5F9A' />
          <path d='M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z' fill='#F4A949' />
          <path d='M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z' fill='#9C27B0' />
          <path d='M433.682 456.113L745.839 455.683L750.486 470.793L438.556 471.918L433.682 456.113Z' fill='#9C27B0' />
          <path d='M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z' fill='#F4A949' />
          <path d='M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z' fill='#9C27B0' />
          <path d='M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z' fill='#9C27B0' />
          <path d='M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z' fill='#1C5F9A' />
        </svg>
      </div>
    </>
  )
}
