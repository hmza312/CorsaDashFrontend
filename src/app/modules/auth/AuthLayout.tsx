/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100 bg-white'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}

        <div className='d-flex flex-center'>
          <div className='w-lg-500px px-5'>
            {/* begin::Links */}
            <div className='d-flex fw-semibold text-primary fs-base'>
              <a href='#' className='px-5' target='_blank'>
                Terms
              </a>

              <a href='#' className='px-5' target='_blank'>
                Plans
              </a>

              <a href='#' className='px-5' target='_blank'>
                Contact Us
              </a>
            </div>
          </div>
          {/* end::Links */}
        </div>
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div className='d-flex flex-column w-lg-400px bgi-size-cover bgi-position-center bg-black'>
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          <Link to='/' className='mb-8'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-2.png')} className='h-50px' />
          </Link>
          {/* end::Logo */}

          {/* begin::Title */}
          <h1 className='text-white text-center mb-7'>The Nation's #1 Leading Rental Car CRM</h1>
          {/* end::Title */}

          {/* begin::Text */}
          {/* end::Text */}
        </div>
        <div
          className='d-flex flex-lg-row-fluid w-100 bgi-size-contain bgi-no-repeat bgi-position-center'
          style={{backgroundImage: `url(${toAbsoluteUrl('/media/logos/s_present.png')})`}}
        ></div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
