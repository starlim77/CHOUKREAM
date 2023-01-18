import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { setRefreshToken } from './storage/Cookie.js';

function SocialLoginRedirect() {
  const params = useParams()
  const navigate = useNavigate()

  const accessToken = new URL(window.location.href).searchParams.get('accessToken')
  const refreshToken = new URL(window.location.href).searchParams.get('refreshToken')

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken)
    setRefreshToken(refreshToken)

    alert('로그인 성공')
    navigate('/')
  }, []);

  return <></>;
}

export default SocialLoginRedirect;
