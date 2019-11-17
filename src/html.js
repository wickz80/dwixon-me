import * as React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `let elements = document.body.getElementsByClassName("album")
      console.log("executing")
      let scrollPosition = 0
      let lastScrollPosition = 0
      let velocityX = 0
      let velocityY = 0
      let rotationX = 0
      let rotationY = 0
      let targetRotationX = 0
      let targetRotationY = 0
      
      let lastUpdateTime = Date.now()
      
      update()
      
      function update() {
        const dt = calcDeltaTime()
      
        let scrollForce = (scrollPosition - lastScrollPosition) * .002
        scrollForce = clamp(scrollForce, -70, 70)
        lastScrollPosition = scrollPosition
        velocityX += -scrollForce * dt
      
        velocityX = spring(rotationX, targetRotationX, velocityX, 10, dt)
        velocityY = spring(rotationY, targetRotationY, velocityY, 10, dt)
        rotationX += velocityX * dt
        rotationY += velocityY * dt
      
        const style = \`perspective(100px) rotateX(\${rotationX}rad) rotateY(\${rotationY}rad)\`
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transform = style
        }
        // document.body.style.transform = style;
      
        requestAnimationFrame(update)
      }
      
      function calcDeltaTime() {
        const now = Date.now()
        let dt = (now - lastUpdateTime) / 1000
        dt = Math.min(dt, 0.1)
        lastUpdateTime = now
        return dt
      }
      
      window.addEventListener("scroll", e => {
        scrollPosition = window.pageYOffset
      })
      
      window.addEventListener("pointermove", e => {
        const w = window.innerWidth
        const h = window.innerHeight
        const y = (e.clientX - w * 0.5) / w
        const x = (1 - (e.clientY - h * 0.5)) / h
      
        targetRotationX = x * 0.0003
        targetRotationY = y * 0.0003
      
        targetRotationX = clamp(targetRotationX, -1, 1)
        targetRotationY = clamp(targetRotationY, -1, 1)
      })
      
      function spring(position, target, velocity, omega, dt) {
        const n1 = velocity - (position - target) * (omega * omega * dt)
        const n2 = 1 + omega * dt
        velocity = n1 / (n2 * n2)
        return velocity
      }
      
      function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max)
      }`
        }}
      ></script>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
