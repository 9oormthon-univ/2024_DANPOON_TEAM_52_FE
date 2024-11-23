import { Image } from "antd"

export default function Logo({ ...props }) {
  return (
    <Image width={200} src="/logo.png" alt="logo" preview={false} {...props} />
  )
}
