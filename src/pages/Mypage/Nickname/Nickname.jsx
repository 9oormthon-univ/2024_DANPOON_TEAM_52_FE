import React, { useEffect, useState } from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../Calendar/styled"
import userAtom from "../../../store/atoms/user"
import { useSetRecoilState } from "recoil"
const NicknamePage = ({ setIsEdit }) => {
  const [nickname, setNickName] = useState("")
  const setUserData = useSetRecoilState(userAtom)
  //변경된 닉네임 아톰에 갱신
  const handleSaveNickname = () => {
    setUserData((prevData) => ({
      ...prevData,
      nickname: nickname,
    }))
    setIsEdit(false)
  }
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>변경할 닉네임을 입력하세요</h3>
        <ModalInput
          style={{
            height: "40px",
          }}
          value={nickname}
          onChange={(e) => setNickName(e.target.value)}
        />
        <ModalButtonGroup>
          <ModalButton onClick={() => setIsEdit(false)}>취소</ModalButton>
          <ModalButton
            onClick={() => {
              handleSaveNickname();
            }}
          >
            완료
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default NicknamePage
