import styled from "styled-components";
import {
	FaInstagram,
	FaLinkedin,
	FaFacebook,
	FaTimes,
	FaTwitter,
	FaDiscord,
} from "react-icons/fa";

export const SidebarContainer = styled.aside`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	transition: 0.7s ease-in-out;
	top: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
	opacity: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;
export const Icon = styled.div`
	z-index: 10000 !important;
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarContent = styled.div`
	color: #fff;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 50px 0px;
`;
export const SidebarMenu = styled.ul`
	z-index: 1000 !important;
	display: grid;
	margin-top: 100px;
	padding-left: 10%;
	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 80px);
	}
`;

export const SidebarLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: left;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	cursor: pointer;

	&:hover {
		font-weight: 800;
		transition: 0.2s ease-in-out;
	}
`;

export const SidebarIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.4rem;
`;
export const LinkedinIcon = styled(FaLinkedin)`
	color: #fff;
`;

export const InstagramIcon = styled(FaInstagram)`
	color: #fff;
	padding-left: 10px;
`;

export const TwitterIcon = styled(FaTwitter)`
	color: #fff;
	padding-left: 10px;
`;
export const FacebookIcon = styled(FaFacebook)`
	color: #fff;
	padding-left: 10px;
`;
