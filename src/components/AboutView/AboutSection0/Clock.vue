<!-- eslint-disable -->
<template>
	<div class="clock-container" :class="{'active':hover_status && (hover_init_index == hover_current_index)}" @mouseenter="getHoverIndex" @mouseleave="getRemoveHoverIndex" @focusin="handleFocusIn" @focusout="handleFocusIn">
		<div class="clock-popup">
		</div>
		<div class="clock-group">
			<div class="clock-hover">
				<div class="clock-bg">
					<div class="clock-arrows">
						<span class="h-arrow"></span>
						<span class="m-arrow"></span>
						<span class="center-arrow"></span>
					</div>
				</div>
				<div class="clock-initial"></div>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name:"Clock",
	props: {
		hover_status: {
			type: Boolean,
			required: true,
		},
		hover_init_index: {
			type: Number,
			required: true,
		},
		hover_current_index: {
			type: Number,
			required: true,
		},
	},
	methods:{
		getHoverIndex() {
      		this.$emit('hoverIndex');
		},
		getRemoveHoverIndex() {
			this.$emit('removeHoverIndex');
		},
		handleFocusIn() {
			console.log('handleFocusIn');
		},
	}

}
</script>
<style scoped>
.clock-badge.clock-text {
	display: flex;
}

.clock-number {
	margin: auto;
}
.clock-badge {
	position: fixed;
	top: 0;
	background: wheat;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid #312d2d;
}

.clock-badge-img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.clock-initial {
	position: absolute;
	bottom: 0;
	width: 50%;
	right: 50%;
	height: 0%;
	background: white;
	transform-origin: 100% 0%;
	transform: rotate(0deg);
	opacity: 0;
	z-index: 1;
	transition: all 0.4s;
	/* transition-delay: 0.5s; */
}

.clock-group {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	padding: 1px;
	border-radius: 50%;
}

.clock-hover {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	/* width: 18px;
	height: 18px; */
	transition: all 0.5s;
	width: 20px;
	height: 20px;
	background: white;
	border: 5px solid;
	border-radius: 50%;
	z-index: 2;
	overflow: hidden;
}

.clock-arrows {
	position: relative;
	border-radius: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	opacity: 0;
}

span.center-arrow {
	width: 5px;
	height: 5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 50%;
	z-index: 3;
}

span.m-arrow {
	position: absolute;
	left: 50%;
	width: 36%;
	height: 1px;
	background: white;
	transform: translateY(-1px) rotate(90deg);
	transform-origin: left;
	/* transition: transform 0.5s ease-in; */
	transition: all 0.4s ease-in;
	/* transition-delay: 0.5s; */
}

span.h-arrow {
	position: absolute;
	left: 50%;
	width: 30%;
	height: 2px;
	background: white;
	transform: translateY(-1px) rotate(90deg);
	transform-origin: left;
	/* transition: transform 0.5s ease-in; */
	transition: all 0.4s ease-in;
	/* transition-delay: 0.5s; */
}

.clock-container {
	width: 55px;
	height: 55px;
	overflow: visible;
	border-radius: 50%;
	&.active .clock-hover {
		opacity: 1;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: radial-gradient(#3d3d3d, black);
		border: 1px solid rgb(119, 119, 119);
	}

	&.active .clock-initial {
		height: 95%;
		opacity: 1;
	}

	&.active .clock-arrows {
		opacity: 1;
	}

	&.active .clock-popup {
		opacity: 1;
		top: 7%;
		transform: scale(1);
	}

	&.active .m-arrow {
		opacity: 1;
		transform: translateY(-1px) rotate(270deg);
	}

	&.active .h-arrow {
		transform: translateY(-1px) rotate(375deg);
		opacity: 1;
	}
	
	&.active .clock-bg {
		background: radial-gradient(#3d3d3d, black)
	}
}

.clock-popup {
	opacity: 0;
	transition: all 0.5s ;
	position: absolute;
	top: 7%;
	color: white;
	transform: scale(0.5);
	display: flex;
}



.clock-bg {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 95%;
	height: 95%;
	background: white;
	z-index: 3;
	transform: translate(-50%, -50%);
	border-radius: 50%;
}

</style>

