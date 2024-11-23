import React, { useState } from "react"
import { ModalOverlay, ModalContent, ModalInput, ModalButtonGroup, ModalButton} from "../../Calendar/styled"

const NicknamePage = ({ setIsModalOpen }) => {
    const [nickname, setNickName] = useState("");
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
          <ModalButton onClick={() => setIsModalOpen(false)}>취소</ModalButton>
          <ModalButton onClick={()=>{/*닉네임변경 api*/ setIsModalOpen(false)}}>완료</ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default NicknamePage
