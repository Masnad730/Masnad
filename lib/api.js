import axios from 'axios'

export async function getAllPractices() {
  const practices = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-practices/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return practices
}

export async function getAllPracticesCustomFields() {
  const practices = await axios
    .get(
      `https://wpbackend.navisa.af/wp-json/wp/v2/masnad-practices/?per_page=100&_fields[]=slug&_fields[]=acf`
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return practices
}
export async function getAllInsights() {
  const insights = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return insights
}

export async function getAllAfghanistanLaws() {
  const afghanLaws = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/afghanistan-laws/?per_page=100&order=asc')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return afghanLaws
}

export async function searchForAfghanLaw(query, setSearchedItems, setIsLoading) {
  const afghanLaws = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/afghanistan-laws?search=${query}`)
    .then((res) => {
      console.log(res.data)
      setSearchedItems(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })

  return afghanLaws
}

export async function getAllTreatiesAndConventions() {
  const treaties = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-treaties/?per_page=100')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return treaties
}

export async function getAllTaxManuals() {
  const taxManuals = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-tax-manuals/?per_page=100&order=asc')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return taxManuals
}

export async function getAllTaxGuidelines() {
  const taxGuidelines = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-tax-guides/?per_page=100&order=asc')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return taxGuidelines
}

export async function getAllLegalBooks() {
  const legalBooks = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-books/?per_page=100')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return legalBooks
}

export async function getAllLegalDocTemplates() {
  const templates = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-docs/?per_page=100')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return templates
}

export async function getAllLegalReports() {
  const legalReports = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-reports/?per_page=100&order=asc')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return legalReports
}

export async function getAllDoingBizInAfghanistan() {
  const doingBusiness = await axios
    .get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-doing-biz-afg/?per_page=100')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return doingBusiness
}

export async function getAllUsefulLinks() {
  const links = await axios
    .get(
      `https://wpbackend.navisa.af/wp-json/wp/v2/masnad-useful-links/?per_page=100&_fields[]=slug&_fields[]=acf&order=asc`
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return links
}

export async function searchForUsefulLinks(query, setSearchedItems, setIsLoading) {
  const links = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-useful-links?search=${query}`)
    .then((res) => {
      setSearchedItems(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })

  return links
}

export async function submitEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar) {
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/masnad-enquires',
          {
            title: 'User Enquiry - Masnad Law Firm',
            status: 'publish',
            fields: {
              name: userInfo.firstName + userInfo.lastName,
              phone_number: userInfo.phoneNumber,
              email: userInfo.email,
              message: userInfo.message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your message has been submitted successfully.')
            setIsLoading(false)
          } else {
            enqueueSnackbar('There was an error trying to send your message, Please try again.')
            setIsLoading(false)
          }
          return res.data
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          enqueueSnackbar(
            'There was an error trying to send your message, Please check your network connection and try again.'
          )
        })
    })
    .catch((err) => {
      console.log(err)
    })
  setUserInfo({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })

  return res
}
export async function submitSubscriptionEmail(email, setEmail, setIsLoading, enqueueSnackbar) {
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/ms-subscribed-email',
          {
            title: 'Email Subscription',
            status: 'publish',
            fields: {
              email: email,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your email is registered successfully')
          } else {
            enqueueSnackbar('Your email is not registered, please try again')
          }
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          enqueueSnackbar('Your email is not registered, please try again')
        })
    })
    .catch((err) => {
      console.log(err)
    })
  setEmail('')
  return res
}
