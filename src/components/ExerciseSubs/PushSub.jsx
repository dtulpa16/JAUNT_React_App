import './Sub.css'


const PushSub = () => {
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
      <th scope="row">Barbell Bench Press</th>
      <td>Dips</td>
      <td>Dumbbell Press</td>
      <td>Incline Barbell</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Shoulder Press Machine</th>
      <td>Dumbbell Shoulder Press</td>
      <td>Barbell Overhead Press</td>
      <td>Arnold Press</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Pec Flies</th>
      <td>Machine Flies</td>
      <td>Cable Flies</td>
      <td>Dumbbell Flies</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Tricep Rope Extentions</th>
      <td>Tricep Cable Pushdowns</td>
      <td>Skull Crushers</td>
      <td>Diamond Pushup</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Dumbbell lunges</th>
      <td>Cable Pullthrough</td>
      <td>Stiff Leg Deadlift</td>
      <td>Glute Bridge</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Overhead Press</th>
      <td>Dumbbell Shoulder Press</td>
      <td>Arnold Press</td>
      <td>Machine Shoulder Press</td>
    </tr>
  </tbody>
</table>
    )
}
export default PushSub