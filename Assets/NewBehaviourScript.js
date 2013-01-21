#pragma strict

function Start () {

}

function Update () {
	transform.position.x +=
		Input.GetAxis("Horizontal") * (10.0 * Time.deltaTime);
	transform.position.z +=
		Input.GetAxis("Vertical")	* (10.0 * Time.deltaTime);
}