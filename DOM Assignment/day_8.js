let myCompanies = [
  {
    sn: '1',
    companyName: 'Andela',
    companyEmail: 'hi@andela.com',
    companyPhone: '08066479103',
    location: 'Africa'
  },
  {
    sn: '2',
    companyName: 'Google',
    companyEmail: 'hi@google.com',
    companyPhone: '07082158660',
    location: 'America'
  },
  {
    sn: '3',
    companyName: 'Microsoft',
    companyEmail: 'hi@microsoft.com',
    companyPhone: '08120919501',
    location: 'America'
  },
  {
    sn: '4',
    companyName: 'Apple',
    companyEmail: 'hi@apple.com',
    companyPhone: '08130997193',
    location: 'USA'
  }
];

document.getElementById("content").innerHTML =
  `<table>
      <tr>
        <th>S/N</th>
        <th>Company Name</th>
        <th>Company Email<th>
        <th>Company Phone</th>
        <th>Location</th>
      </tr>
    <tbody>
      ${myCompanies.map((x) =>
    `<tr>
        <td>${x.sn}</td>
        <td>${x.companyName}</td>
        <td>${x.companyEmail}</td>
        <td>${x.companyPhone}</td>
        <td>${x.location}</td>
      </tr>`
  )}
    </tbody>
  </table>`;
