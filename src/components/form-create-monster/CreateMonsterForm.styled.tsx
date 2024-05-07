import styled from "@emotion/styled"
import { colors } from "../../constants/colors"
import { Box, OutlinedInput, Alert } from "@mui/material"

export const CreateMonsterBox = styled(Box)(() => ({
    background: colors.white,
    display: 'flex', 
    flexWrap: 'wrap',
    marginBottom: '69px',
    padding: '15px 0px'
}))

export const InputName = styled(OutlinedInput)(() => ({
    width: '100%',
    margin: '1'
}))

export const CustomAlert = styled(Alert)(() => ({
    width: '95%',
    margin: '0 auto'
}))