import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ReportPage from '../../features/report/productreport/reportproduct/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report | Product Report |"}))
      }, [])


    return(
        < ReportPage />
    )
}

export default InternalPage