import TickCircle from './icons/tick-circle'
import StepCircleBlue from './icons/step_circle_blue'
import StepCircleBlueLight from './icons/step_circle_blue_light'
import Step from './step'

export default function Steps () {
  return (
    <ol className='flex justify-between'>
      <Step text='Cart Review' textSm='Step 1 : Cart Review'><TickCircle className='w:5 sm:w-10 h-5 sm:h-10' /></Step>
      <Step text='Checkout' textSm='Step 2 : Checkout'><TickCircle className='w:5 sm:w-10 h-5 sm:h-10' /></Step>
      <Step text='Special Offer' textSm='Step 3 : Special Offer'><StepCircleBlue className='w:5 sm:w-10 h-5 sm:h-10'>3</StepCircleBlue></Step>
      <Step text='Confirmation' textSm='Step 4 : Confirmation'><StepCircleBlueLight className='w:5 sm:w-10 h-5 sm:h-10'>4</StepCircleBlueLight></Step>
    </ol>
  )
}
