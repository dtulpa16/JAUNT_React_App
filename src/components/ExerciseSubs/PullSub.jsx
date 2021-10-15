import './Sub.css'


const PullSub = () => {
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
      <th scope="row">Lat Pulldown</th>
      <td>Pullup</td>
      <td>V-Grip Cable Pulldown</td>
      <td>Chin-Up</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Reverse Fly</th>
      <td>Cable Facepulls</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="table-light">
      <th scope="row">Bicep Curl Variation</th>
      <td>Dumbbell Curls</td>
      <td>EZ Bar Curls</td>
      <td>Barbell Curls</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Pullup</th>
      <td>Lat Pulldown</td>
      <td>Chin-up</td>
      <td>Diamond Pushup</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Facepulls</th>
      <td>Reverse Flies</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="table-light">
      <th scope="row">Pendlay Rows</th>
      <td>Barbell Rows</td>
      <td>T-Bar Row</td>
      <td>Dumbbell Row</td>
    </tr>
  </tbody>
</table>
    )
}
export default PullSub