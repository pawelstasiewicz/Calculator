import styled from 'styled-components';

export const StyledKeyboardButtonComponent = styled.button`
	justify-self: center;
	height: 50px;
	width: 50px;
	border: none;
	border-radius: 30px;
	background-color: transparent;
	z-index: 5;

	&:hover {
		background-color: #a2bbcf;
		transition: 0.3s;
	}

	&:first-child,
	&:nth-child(2),
	&:nth-child(3) {
		p {
			color: #205b7a;
		}
	}

    &:nth-child(4){
        top:10px;
    }

	&:nth-child(4),
	&:nth-child(8),
	&:nth-child(12),
	&:nth-child(16),
	&:nth-child(20) {
		background-color: #205b7a;
		border-radius: 0;
		width: 75px;
        height:60px;
		p {
            margin-top:-10px;
			color: #000000;
		}
	}

	&:nth-child(4):hover,
	&:nth-child(8):hover,
	&:nth-child(12):hover,
	&:nth-child(16):hover,
	&:nth-child(20):hover {
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 30px;
			height: 50px;
			width: 50px;
			background-color: #a2bbcf;
			transition: 0.3s;
		}
	}

	&:nth-child(20) {
		border-radius: 0 0 10px 0;
	}

	p {
		font-family: monospace;
		font-weight: bold;
		color: #f0f0f0;
	}
`;
