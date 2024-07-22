import React from 'react'
import './Festivals.css'
export default function Destani(props) {
  return (
    <div>

      <div className='festivals-heading-container'>
          <div className="blackline-left"></div>
          <div className='csliderh1-container'>
                <h1 className='csliderh1'> Best time to travel Sri Lanka</h1>
          </div>
          <div className="blackline-right"></div>
      </div>

      <div className='aboutstart'>
      <div className='Discription1'>
        <div className="text-part-festival">
            <h1>Festivals</h1>
        <div className="festival-ash-line"></div>
        </div>
        <p> <b>Sinhala and Tamil New Year: </b>
          This vibrant festival, celebrated in 
          April, marks the beginning of the
          traditional New Year for both the
          Sinhalese and Tamil communities.
          It's a time of joyous gatherings,
          cultural rituals, and delicious 
          traditional sweets.<br/><br/>

          <b>Vesak:</b> Celebrated in May, Vesak 
          commemorates the birth, 
          enlightenment, and passing 
          away of Lord Buddha. Homes, 
          streets, and temples are adorned 
          with colorful lanterns, and 
          devotees engage in acts of charity and meditation.<br/><br/>


          <b>Kandy Esala Perahera: </b> Held in July or August, this grand procession in Kandy honors the sacred 
          tooth relic of the Buddha. Elephants adorned with intricate costumes, traditional dancers, and 
          drummers parade through the streets in a spectacular display of culture and faith.<br/>
          </p>
        </div>

        <div className='festival-image1'>
          <img src={`${process.env.PUBLIC_URL}/images/Festivals.jpg`} alt='image'  className='image1' />
        </div>
      </div> 

      <div className='Discription2'>
        <p className='distext'><br/><br/><br/><b>Poson Poya: </b>Celebrated in June, Poson Poya commemorates the introduction of Buddhism to Sri 
        Lanka. Devotees flock to the ancient city of Anuradhapura to pay homage to the sacred sites and 
        engage in religious ceremonies.<br/><br/>
        <b>Deepavali (Diwali):</b> Observed by the Tamil community, Deepavali, the Festival of Lights, symbolizes 
        the victory of light over darkness and good over evil. Homes are illuminated with oil lamps, and 
        families gather to exchange sweets and gifts.<br/><br/>
        <b>Eid al Fitr:</b> Celebrated by the Muslim community, Eid al-Fitr marks the end of Ramadan, the holy 
        month of fasting. It's a time of feasting, prayer, and sharing blessings with family and friends.</p>
      </div>
      
    </div>
  )
}
