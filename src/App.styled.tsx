import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { colors } from "./constants/colors"

export const AppContainer = styled(Box)(() => ({
    background: colors.lightGray,
    width: '100%',
    height: '100%',
    paddingTop: '69px'
}))