import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import themeConfig from 'src/configs/themeConfig'
import { LayoutProps } from 'src/@core/layouts/types'
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = (props: LayoutProps) => {
  const { settings, children } = props

  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize

  const [navVisible, setNavVisible] = useState<boolean>(false)

  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        <MainContentWrapper className='layout-content-wrapper'>
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>

          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id='react-datepicker-portal'></Box>
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
    </>
  )
}

export default VerticalLayout
