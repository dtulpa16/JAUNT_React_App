import { render } from "@testing-library/react"
import './Sub.css'

const LegSub = () => {
    return(
        <table class="sub-table">
  <thead>
    <tr className="sub-table-contents">
      <th scope="col">Exercise</th>
      <th scope="col">Substitutions</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light">
      <th scope="row">Barbell Back Squat</th>
      <td>Barbell Front Squat</td>
      <td>Leg Press Machine</td>
      <td>Dumbbell Goblet Squat</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Leg Press</th>
      <td>Barbell Back Squat</td>
      <td>Barbell Front Squat</td>
      <td>Dumbbell Lunges</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Calf Machine</th>
      <td>Standing Calf Raise</td>
      <td>Seated Calf Raise</td>
      <td></td>
    </tr>
    <tr class="table-light">
      <th scope="row">Deadlifts</th>
      <td>Barbell Hip Thrust</td>
      <td>Trap Bar Deadlift</td>
      <td>Kettlebell Swings</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Dumbbell lunges</th>
      <td>Cable Pullthrough</td>
      <td>Stiff Leg Deadlift</td>
      <td>Glute Bridge</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Leg Extention</th>
      <td>Front Squat</td>
      <td>Goblet Squat</td>
      <td></td>
    </tr>
  </tbody>
</table>
    )
}
export default LegSub