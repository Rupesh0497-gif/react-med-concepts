const siteInformation = {
    "Emergency & Critical Care": ['Emergency Department', 'Neonatal Intensive Care Services', 'Pediatric Intensive Care Services'],
    "Diagnostic Services": ['Magnetic Resonance Imaging (MRI)', 'Diagnostic Radioisotope Facility', 'Lithotripsy'],
    "Cardiac Services": ['Cardiac Catheterization Laboratory', 'Open Heart'],
    "Rehabilitation Services": ['Physical Rehabilitation Services', 'Physical Therapy', 'Occupational Therapy', 'Speech/Language Therapy', 'Audiology']
}

const servicesList = {
    "All Services" : ["Emergency & Critical Care", "Diagnostic Services", "Cardiac Services", "Rehabilitation Services"],
    "Clinical": ["Emergency & Critical Care"],
    "Surgical": ["Cardiac Services"],
    "Diagnostic": ["Diagnostic Services"],
    "Rehabilitation": ["Rehabilitation Services"],
    "Specialty": ["Cardiac Services"]
}

const errorInfo = {
    "legalentityname": "Please enter a valid entity name.",
    "dbaname": "Please enter a valid dba name.",
    "firstname": "Please enter a valid first name.",
    "lastname": "Please enter a valid last name.",
    "title": "Please enter a valid title.",
    "workphone": "Please enter a 10-digit phone number.",
    "cellphone": "Please enter a 10-digit phone number.",
    "phone": "Please enter a 10-digit phone number.",
    "email": "Please enter a valid email.",
    "faculty_Type": "Please select a value to proceed",
    "zipcode": "Please enter a valid number",
    "city": "Please a valid city",
    "streetaddress": "Please a valid street address"
} 

const regexList = {
    "onlyLetters" : /^[A-Za-z\s]+$/,
    "onlyNumbers": /^[0-9]+$/,
    "alphaNumeric": /^[A-Za-z0-9\s]+$/,
    "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

const stateList= {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

export {siteInformation, errorInfo, regexList, stateList, servicesList}