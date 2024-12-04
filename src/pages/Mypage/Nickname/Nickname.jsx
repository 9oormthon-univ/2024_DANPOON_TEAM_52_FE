import React, { useEffect, useState } from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../Calendar/styled"
import { Text } from "../../../components/Typo"
import { reqUpdateUser } from "../../../apis/user"
import userInfoAtom from "../../../store/atoms/userinfo"
import { useRecoilState } from "recoil"
import Modal from "../../../components/Modal"
const NicknamePage = ({ setIsEdit, isEdit }) => {
  const [userData, setUserData] = useRecoilState(userInfoAtom)
  const [nickname, setNickName] = useState(userData.nickname)
  //변경된 닉네임 아톰에 갱신
  const handleSaveNickname = () => {
    setUserData((prev) => ({
      ...prev,
      nickname: nickname,
    }))
    localStorage.setItem("nickname", nickname)
    reqUpdateUser({
      nickname: nickname,
      known_prompt: prompt.prompt1,
      help_prompt: prompt.prompt2,
      is_notification: userData.is_notification,
      is_profile: userData.is_profile,
    })
    setIsEdit(false)
  }
  return (
    <ModalOverlay>
      <Modal
        open={isEdit}
        onClose={() => {
          setIsEdit(false)
        }}
        children={
          <>
            <Text style={{ color: "white", textAlign: "center" }}>
              변경할 닉네임을 입력하세요
            </Text>
            <ModalInput
              style={{
                height: "40px",
              }}
              onChange={(e) => setNickName(e.target.value)}
            />
            <ModalButtonGroup>
              <ModalButton onClick={() => setIsEdit(false)}>취소</ModalButton>
              <ModalButton
                onClick={() => {
                  handleSaveNickname()
                }}
              >
                완료
              </ModalButton>
            </ModalButtonGroup>
          </>
        }
      />
    </ModalOverlay>
  )
}

export default NicknamePage
