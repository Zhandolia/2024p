import './Contact.css'
export default function Contact() {

  return (
    <div className='contact'>
        <div className='map'>
        <iframe title="hojo" width="100%" height="300" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Boston%20Universit%20College%20of%20Computing%20and%20Data%20Science+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div className='contact-info'>
          <h1>Contact Me</h1>
          <ul>
            <li><a href='https://www.linkedin.com/in/zhanbrown/' target='blank'>🔗 Linkedin </a></li>
            <li><a href='https://github.com/zhandolia' target='blank'>🔗 Github </a></li>
            <li><a href='https://www.instagram.com/zhanbrown/' target='blank'>🔗 Instagram </a></li>
            <li><a href='mailto:zhandos@bu.edu'>📧 zhandos@bu.edu</a></li>
            <li>📍 665 Commonwealth Avenue<br/>Boston, MA 02215</li>
          </ul>
        </div>
    </div>
  )
}
